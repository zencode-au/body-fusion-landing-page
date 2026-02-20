"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { notifyContactUsDiscord } from "@/lib/discord";

function getRequiredString(formData: FormData, key: string) {
  const raw = formData.get(key);
  const value = typeof raw === "string" ? raw.trim() : "";

  if (!value) {
    throw new Error(`Missing required field: ${key}`);
  }

  return value;
}

export async function submitContactMessage(formData: FormData) {
  const firstName = getRequiredString(formData, "firstName");
  const lastName = getRequiredString(formData, "lastName");
  const email = getRequiredString(formData, "email");
  const team = getRequiredString(formData, "team");
  const message = getRequiredString(formData, "message");

  let status: "success" | "error" = "success";

  try {
    const headerStore = await headers();
    const userAgent = headerStore.get("user-agent") ?? "unknown";
    const ip =
      headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headerStore.get("x-real-ip") ??
      "unknown";

    await notifyContactUsDiscord({
      title: "New Contact Us Message",
      message,
      context: {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        email,
        team,
        source: "Landing Page",
        userAgent,
        ip,
      },
    });
  } catch (error) {
    console.error("Failed to send contact message to Discord:", error);
    status = "error";
  }

  redirect(`/contact?status=${status}`);
}
