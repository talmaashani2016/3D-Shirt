import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#1f1f1f",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./oqbi.png",
  fullDecal: "./oqbi.png",
});

export default state;
