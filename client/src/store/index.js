import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#efbd4e",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./three.js.png",
    fullDecal: "./three.js.png"
})
export default state