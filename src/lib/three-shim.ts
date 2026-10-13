// @ts-nocheck
// Re-export everything from the real three.js and add back deprecated constants
// needed by @designcodeio/threeui which references sRGBEncoding (removed in r162)
export * from "../../node_modules/three/build/three.module.js";
export const sRGBEncoding = 3001;
export const LinearEncoding = 3000;
