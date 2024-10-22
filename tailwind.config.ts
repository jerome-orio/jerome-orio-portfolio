import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideIn: "slideIn .8s ease-in forwards",
        slideInFromTop: "slideInFromTop .8s ease-in forwards",
        circular: "circular 15s linear infinite alternate",
        circularDash1: "dashAnimation 3s linear infinite alternate 1s",
        circularDash2: "dashAnimation 3s linear infinite alternate 2s",
        zoomIn: "zoomIn 1s ease-in forwards",
        zoomOut: "zoomOut 1s ease-out forwards",
        colorChange: "colorChange 15s infinite",
      },
      keyframes: {
        fadeIn: {
          "from": {
            opacity: "0",
          },
          "to": {
            opacity: "1",
          }
        },
        slideIn: {
          "from": {
            transform: "translateX(-100%)",
            opacity: "0.25",
          },
          "to": {
            transform: "translateY(0%)",
            opacity: "1",
          }
        },
        slideInFromTop: {
          "from": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "to": {
            transform: "translateY(0%)",
            opacity: "1",
          }
        },
        circular: {
          "from": {
            transform: "rotate(0turn)",
          },
          "to": {
            transform: "rotate(1turn)",
          }
        },
        dashAnimation: {
          "from": {
            "stroke-dashoffset": "0",
          },
          "to": {
            "stroke-dashoffset": "-100",
          }
        },
        zoomIn: {
          "from": {
            transform: "scale(.8)",
            opacity: "0"
          },
          "to": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        zoomOut: {
          "from": {
            transform: "scale(1)",
            opacity: "1"
          },
          "to": {
            transform: "scale(.8)",
            opacity: "0"
          }
        },
        colorChange: {
          "0%": { color: "red" },
          "25%": { color: "blue" },
          "50%": { color: "green" },
          "75%": { color: "orange" },
          "100%": { color: "purple" },
        },
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula', 'bumblebee']
  },
  darkMode: ['class', '[data-theme="dracula"]']
};
export default config;
