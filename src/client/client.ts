import * as JSON5 from "json5";

export const config = JSON5.parse(LoadResourceFile(GetCurrentResourceName(), "configs/config.json5"));
export const locale = JSON5.parse(LoadResourceFile(GetCurrentResourceName(), "configs/locale.json5"));

console.log("fivem-ts-boilerplate STARTED")
