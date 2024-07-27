import { Poppins, Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-inverted":
          "0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "custom-blue": "#001537",
        "custom-yellow": "#FCA311",
        "custom-offWhite": "#E5E5E5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
