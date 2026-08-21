/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0E14",
          900: "#0F131B",
          800: "#161B26",
          700: "#1E2531",
          600: "#2A3341",
        },
        parchment: {
          DEFAULT: "#EDEAE3",
          dim: "#A8A69F",
          faint: "#6E6D68",
        },
        verified: {
          DEFAULT: "#4A9B7F",
          bright: "#5FB894",
          dim: "#2E5C4B",
        },
        caution: {
          DEFAULT: "#C99A4A",
          dim: "#7A5F30",
        },
        flagged: {
          DEFAULT: "#B85450",
          dim: "#6E332F",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
