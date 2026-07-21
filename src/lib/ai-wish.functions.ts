import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  name: z.string().min(1).max(60),
  relationship: z.string().min(1).max(60),
  tone: z.string().min(1).max(40),
  recipient: z.string().min(1).max(60),
});

export const generateWish = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content:
              "You write short, elegant, heartfelt birthday wishes. 2-4 sentences. No hashtags. No emojis at the start. Sound human.",
          },
          {
            role: "user",
            content: `Write a birthday wish for ${data.recipient} from ${data.name} (${data.relationship}). Tone: ${data.tone}.`,
          },
        ],
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`AI error ${res.status}: ${text.slice(0, 200)}`);
    }
    const json = await res.json();
    const message = json?.choices?.[0]?.message?.content?.trim() ?? "";
    return { message };
  });