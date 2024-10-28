import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-image": 'url("/images/bg-image.jpg")',
        "hero-image": 'url("/images/hero.jpg")',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          "50%": {
            transform: "translateY(-20%)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeSlideUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        swing: {
          "20%": {
            transform: "rotate(15deg)",
          },
          "40%": {
            transform: "rotate(-10deg)",
          },
          "60%": {
            transform: "rotate(5deg)",
          },
          "80%": {
            transform: "rotate(-5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        slideRight: "slideRight 750ms ease-in-out",
        slideLeft: "slideLeft 750ms ease-in-out",
        appear: "appear 2s linear",
        bounce: "bounce 1s ease-in-out",
        scaleUp: "scaleUp 500ms ease-in-out",
        rotate: "rotate 1s linear infinite",
        fadeSlideUp: "fadeSlideUp 700ms ease-in-out",
        swing: "swing 1s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
