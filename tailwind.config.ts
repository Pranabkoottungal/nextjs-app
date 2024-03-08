import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT:"1rem",
          sm: "2rem",      
          lg: "4rem",     
          xl: "6rem",
        },
      },
      colors: {
        accent: "#FF8F9C",
        black: "#1b1b1b"

      }
    },
  },
  plugins: [],
};
export default config;
