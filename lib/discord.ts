type DiscordField = {
  name: string;
  value: string;
  inline?: boolean;
};

type DiscordEmbed = {
  title: string;
  description: string;
  color: number;
  fields?: DiscordField[];
  timestamp: string;
  footer?: {
    text: string;
  };
};

type NotifyContactUsInput = {
  title: string;
  message: string;
  context?: Partial<Record<string, string | number>>;
};

function toTitleCase(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function truncate(value: string, max: number) {
  if (value.length <= max) {
    return value;
  }

  return `${value.slice(0, max - 3)}...`;
}

export async function notifyContactUsDiscord({
  title,
  message,
  context,
}: NotifyContactUsInput) {
  const webhookUrl =
    process.env.DISCORD_WEBHOOK_URL_CONTACT_US ??
    process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("Missing DISCORD webhook URL");
  }

  const version = process.env.APP_VERSION ?? "0.1.0";
  const validContext = Object.entries(context ?? {}).filter(
    ([, value]) => value !== undefined && value !== null && value !== "",
  );

  const embed: DiscordEmbed = {
    title: `ℹ️ ${truncate(title, 256)}`,
    description: truncate(message, 4096),
    color: 0x03a9f4,
    timestamp: new Date().toISOString(),
    footer: { text: `Body Fusion - v${version}` },
    fields: validContext.map(([key, value]) => ({
      name: truncate(toTitleCase(key), 256),
      value: truncate(String(value), 1024),
      inline: false,
    })),
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed with status ${response.status}`);
  }
}
