import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23265A",
        secondary: "#0191FF",
        accent: "#01C7FD",
        emphasis: "#373a69",
        background: "#121433",
        foreground: "#FCFFFD",
        lightBackground: "#FCFFFD",
        darkBackground: "#121433",
      },
      backgroundImage: {
        gradientBlue: "linear-gradient(to right, #0191FF, #01C7FD)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': "#e0e5f8",
              '100': "#b3b9e2",
              '200': "#868ccc",
              '300': "#5a5fb6",
              '400': "#2d33a0",
              '500': "#23265A",
              foreground: "#121433",
            },
            background: "#FCFFFD",
            foreground: "#121433",
            secondary: "#0191FF",
          },
        },
        dark: {
          colors: {
            primary: {
              '50': "#2d33a0",
              '100': "#23265A",
              foreground: "#FCFFFD",
            },
            background: "#121433",
            foreground: "#FCFFFD",
            secondary: "#0191FF",
          },
        },
      },
    }),
  ],
};

export default config;
