import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        punch: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-150px)" },
          "100%": { transform: "translateY(0)" },
        },
        split1: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0)" },
        },
        split2: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        punch: "punch 0.5s ease-in-out",
        split1: "split1 0.5s ease-in-out",
        split2: "split2 0.5s ease-in-out",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        textColor: "#E5E3F0",
        background: "#00001A",
        primary: "#453F8C",
        secondary: "#817EBB",
        accent: "#7CF4B3",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
