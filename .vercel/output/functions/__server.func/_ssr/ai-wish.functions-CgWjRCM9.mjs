import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BpgqxZjr.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-wish.functions-CgWjRCM9.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = objectType({
	name: stringType().min(1).max(60),
	relationship: stringType().min(1).max(60),
	tone: stringType().min(1).max(40),
	recipient: stringType().min(1).max(60)
});
var generateWish_createServerFn_handler = createServerRpc({
	id: "de597d87596197ce066297efdc261ffb228db17374929a4c5b33fef940704724",
	name: "generateWish",
	filename: "src/lib/ai-wish.functions.ts"
}, (opts) => generateWish.__executeServer(opts));
var generateWish = createServerFn({ method: "POST" }).inputValidator((data) => Input.parse(data)).handler(generateWish_createServerFn_handler, async ({ data }) => {
	const key = process.env.LOVABLE_API_KEY;
	if (!key) throw new Error("Missing LOVABLE_API_KEY");
	const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${key}`
		},
		body: JSON.stringify({
			model: "google/gemini-2.5-flash",
			messages: [{
				role: "system",
				content: "You write short, elegant, heartfelt birthday wishes. 2-4 sentences. No hashtags. No emojis at the start. Sound human."
			}, {
				role: "user",
				content: `Write a birthday wish for ${data.recipient} from ${data.name} (${data.relationship}). Tone: ${data.tone}.`
			}]
		})
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`AI error ${res.status}: ${text.slice(0, 200)}`);
	}
	return { message: (await res.json())?.choices?.[0]?.message?.content?.trim() ?? "" };
});
//#endregion
export { generateWish_createServerFn_handler };
