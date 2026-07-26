//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-uk5jDwc0.js
var manifest = { "de597d87596197ce066297efdc261ffb228db17374929a4c5b33fef940704724": {
	functionName: "generateWish_createServerFn_handler",
	importer: () => import("./_ssr/ai-wish.functions-ccdhWCgu.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
