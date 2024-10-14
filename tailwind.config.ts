import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        customPrimary: {
          "50": "#EEF4FF",
          "100": "#D9E6FF",
          "200": "#BCD4FF",
          "300": "#8EB9FF",
          "400": "#5993FF",
          "500": "#2360FF",
          "600": "#1B49F5",
          "700": "#1435E1",
          "800": "#172CB6",
          "900": "#192B8F",
          "950": "#141C57",
        },
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
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // Adding custom utilities for mix-blend-mode
      mixBlendMode: {
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
        // Add other blend modes as needed
      },
      backgroundImage:({theme}) => ({
        'gradient-primary-br': `linear-gradient(to bottom right, ${theme(
          'colors.customPrimary.300'
        )} 0%,${theme('colors.customPrimary.500')} 100%)`,
        'gradient-primary-br-hover': `linear-gradient(to bottom right, ${theme(
          'colors.customPrimary.400'
        )} 0%,${theme('colors.customPrimary.600')} 100%)`,
        'gradient-primary-bl': `linear-gradient(to bottom left, ${theme(
          'colors.customPrimary.300'
        )} 0%,${theme('colors.customPrimary.500')} 100%)`,
        'gradient-primary-tl': `linear-gradient(to top left, ${theme(
          'colors.customPrimary.300'
        )} 0%,${theme('colors.customPrimary.500')} 100%)`,
        'gradient-primary-tb': `linear-gradient(to bottom, ${theme(
          'colors.customPrimary.400'
        )} 0%,${theme('colors.customPrimary.600')} 100%)`,
      }),
    },
  },
  safelist: [
    {
      pattern:
        /text-customPrimary-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: [
        "hover",
        "focus",
        "active",
        "disabled",
        "enabled",
        "checked",
        "indeterminate",
      ],
    },
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animated"),
  ],
} satisfies Config;
