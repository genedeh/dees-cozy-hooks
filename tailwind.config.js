/** @type {import('tailwindcss').Config} */
const config = {
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
        cozy: {
          primary: "#5B2FB5",
          secondary: "#7B4BE0",
          accent: "#9B74F5",
          soft: "#F6F3FB",
          lavender: "#EFE9FA",
          dark: "#1A1A1A",
          beige: "#D8B38A",
          cream: "#E6D2B5",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
