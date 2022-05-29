module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        vibes: ["Great Vibes", "cursive"],
        display: ["Roboto Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
