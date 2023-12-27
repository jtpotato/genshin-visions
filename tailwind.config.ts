import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-aurora":
          "radial-gradient(at 69% 85%, hsla(190,65%,62%,1) 0px, transparent 50%), radial-gradient(at 40% 25%, hsla(148,74%,74%,1) 0px, transparent 50%), radial-gradient(at 67% 22%, hsla(224,89%,74%,1) 0px, transparent 50%), radial-gradient(at 76% 58%, hsla(90,66%,68%,1) 0px, transparent 50%), radial-gradient(at 86% 91%, hsla(88,73%,76%,1) 0px, transparent 50%), radial-gradient(at 23% 5%, hsla(259,70%,77%,1) 0px, transparent 50%), radial-gradient(at 79% 14%, hsla(174,79%,68%,1) 0px, transparent 50%);",
      },
      colors: {
        "genshin-menu-bg": "rgb(234, 230, 213)",
        "genshin-text": "rgb(85, 95, 111)",
        "genshin-slider-active": "rgb(245, 241, 231)",
        "genshin-slider-bg": "rgb(128, 123, 115)",
        "genshin-slider-dot": "rgb(236, 229, 216)"
      },
    },
  },
  plugins: [],
};
export default config;
