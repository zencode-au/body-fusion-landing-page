"use server";

import { headers } from "next/headers";
import { notifySubscribersDiscord } from "@/lib/discord";

function getRequiredEmail(formData: FormData, key: string) {
  const raw = formData.get(key);
  const value = typeof raw === "string" ? raw.trim().toLowerCase() : "";

  if (!value) {
    throw new Error(`Missing required field: ${key}`);
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!isValidEmail) {
    throw new Error("Invalid email format");
  }

  return value;
}

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitSubscriber(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  let email = "";

  try {
    email = getRequiredEmail(formData, "email");
    const headerStore = await headers();
    const userAgent = headerStore.get("user-agent") ?? "unknown";
    const ip =
      headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headerStore.get("x-real-ip") ??
      "unknown";

    await notifySubscribersDiscord({
      title: "New Home Page Subscriber",
      message: `${email} joined the newsletter list from the home page.`,
      context: {
        email,
        source: "Home Page",
        userAgent,
        ip,
      },
    });

    return {
      status: "success",
    };
  } catch (error) {
    console.error("Failed to send subscriber to Discord:", error);
    return {
      status: "error",
      message:
        error instanceof Error && error.message === "Invalid email format"
          ? "Please enter a valid email address."
          : "We couldn't process your subscription right now. Please try again.",
    };
  }
}
