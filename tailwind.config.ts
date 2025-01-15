import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebarblue: "#23265A",
        bgHome: "#121433",
        emphasisBlue: "#373a69",
      },
      backgroundImage: {
        gradientBlue: "linear-gradient(to right, #0191FF, #01C7FD)",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
