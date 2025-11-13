/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'bebasNeue': ['Bebas Neue', 'sans-serif'],
      'sans': ['"A"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      poppins: ["Poppins", "sans-serif"],
      bebasNeue: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#9F294A",
        secondary: "#B69507",
        white: "#fff",
        dark: "#333333",
        transparent: "transparent",
        darkbg: 'rgb(17, 24, 39)',

      },
      animation: {
        slide: "scroll 15s linear infinite",
        pulse: "pulse 1.5s ease-in-out infinite",
        slideUp: "slideUp 0.8s ease-out",
        "bounce-slow": "bounce 3s infinite",
        borderMove: "borderMove 4s linear infinite",
        circleMove: "circleMove 6s ease-in-out infinite",
        // keep a single rotateGlow animation as a string (keyframes defined below)
        rotateGlow: "rotateGlow 6s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        pulse: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.7 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        circleMove: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
        },
        // Smooth rotating corner glow keyframes
        rotateGlow: {
          "0%": { transform: "rotate(0deg) scale(1)", opacity: "0.6" },
          "50%": { transform: "rotate(180deg) scale(1.15)", opacity: "1" },
          "100%": { transform: "rotate(360deg) scale(1)", opacity: "0.6" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
