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
        circular: "circular 12s linear forwards infinite alternate",
        circularDash1: "dashAnimation 8s ease-in-out forwards infinite",
        circularDash2: "dashAnimation 12s ease-in-out forwards infinite",
        zoomIn: "zoomIn 1s ease-in forwards",
        zoomOut: "zoomOut 1s ease-out forwards",
        blurIn: "blurIn 1s forwards",
        flyInBottom: "flyInBottom 1s ease forwards",
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
            transform: "rotate(0deg)",
          },
          "to": {
            transform: "rotate(360deg)",
          }
        },
        dashAnimation: {
          "0%": {
            "stroke-dashoffset": "00", "stroke-width": "7"
          },
          "48%": {
            "stroke-dashoffset": "-40", "stroke-width": "7", "stroke-dasharray": "10 150 0"
          },
          "52%": {
            "stroke-dashoffset": "-40", "stroke-width": "7",
          },
          "100%": {
            "stroke-dashoffset": "00", "stroke-width": "7"
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
        blurIn: {
          "from": {
            transform: "scaleX(0.2)",
            filter: "blur(20px)",
            opacity: "0",
          },
          "to": {
            opacity: "1",
          }
        },
        flyInBottom: {
          "0%": { transform: "translate(0px, 80px)", opacity: "0" },
          "50%": { transform: "translate(10px, -50px)", animationTimingFunction: "ease-in-out" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
      }
    },
  },
  safelist: [
    'animate-blurIn',
    'animate-flyInBottom', // Add expected animation names here
    // Add other dynamic animation names you plan to use
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula', 'bumblebee']
  },
  darkMode: ['class', '[data-theme="dracula"]'],
};
export default config;
