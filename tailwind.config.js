/* eslint-disable import/no-anonymous-default-export */
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#f8f9ff",
            primary: {
              50: "#e6f1ff",
              100: "#cce3ff",
              200: "#99c7ff",
              300: "#66aaff",
              400: "#338eff",
              500: "#0072ff",
              600: "#005bcc",
              700: "#004499",
              800: "#002e66",
              900: "#001733",
              DEFAULT: "#0072ff",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#f5e9ff",
              100: "#ead3ff",
              200: "#d5a7ff",
              300: "#c07bff",
              400: "#ab4fff",
              500: "#9623ff",
              600: "#781ccc",
              700: "#5a1599",
              800: "#3c0e66",
              900: "#1e0733",
              DEFAULT: "#9623ff",
              foreground: "#ffffff"
            },
            success: {
              50: "#e8fbf0",
              100: "#d1f7e1",
              200: "#a3efc3",
              300: "#75e7a5",
              400: "#47df87",
              500: "#19d769",
              600: "#14ac54",
              700: "#0f813f",
              800: "#0a562a",
              900: "#052b15",
              DEFAULT: "#19d769",
              foreground: "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            background: "#121212",
            foreground: "#e0e0e0",
            focus: "#0072ff",
            divider: "rgba(255, 255, 255, 0.08)",
            content1: {
              DEFAULT: "#1e1e1e",
              foreground: "#e0e0e0"
            },
            content2: {
              DEFAULT: "#2a2a2a",
              foreground: "#e0e0e0"
            },
            content3: {
              DEFAULT: "#333333",
              foreground: "#e0e0e0"
            },
            content4: {
              DEFAULT: "#3b3b3b",
              foreground: "#e0e0e0"
            },
            primary: {
              50: "#001733",
              100: "#002e66",
              200: "#004499",
              300: "#005bcc",
              400: "#0072ff",
              500: "#338eff",
              600: "#66aaff",
              700: "#99c7ff",
              800: "#cce3ff",
              900: "#e6f1ff",
              DEFAULT: "#338eff",
              foreground: "#000000"
            },
            secondary: {
              50: "#1e0733",
              100: "#3c0e66",
              200: "#5a1599",
              300: "#781ccc",
              400: "#9623ff",
              500: "#ab4fff",
              600: "#c07bff",
              700: "#d5a7ff",
              800: "#ead3ff",
              900: "#f5e9ff",
              DEFAULT: "#ab4fff",
              foreground: "#000000"
            },
            success: {
              50: "#052b15",
              100: "#0a562a",
              200: "#0f813f",
              300: "#14ac54",
              400: "#19d769",
              500: "#47df87",
              600: "#75e7a5",
              700: "#a3efc3",
              800: "#d1f7e1",
              900: "#e8fbf0",
              DEFAULT: "#47df87",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}