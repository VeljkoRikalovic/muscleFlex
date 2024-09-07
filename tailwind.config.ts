import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(farthest-corner at 99% 0% in lab, #1d8168ff 0%, #123426ff 47%);",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#ebf8f3",
        background: "#123426",
        primary: "#93dbc3",
        secondary: "#3a2774",
        accent: "#4396c1",
        button: "#11c717",
      },
    },
  },
  plugins: [],
};
export default config;
