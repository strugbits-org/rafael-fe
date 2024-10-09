/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-100": "#1f1f1f",
        "secondary-100": "#292929",
        "primary-100": "#2f88ff",
      },
      fontFamily: {
        segoe: ['"Segoe UI"', "sans-serif"],
        segoeBold: ['"Segoe UI BOLD"', "sans-serif"],
      },
      backgroundImage: {
        bgImageCelebration: "url('/src/assets/images/celebrationBGImage.png')",
        meetingStripBg: "url('/src/assets/images/meetingStripBg.png')",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
    },
  },
  plugins: [],
};
