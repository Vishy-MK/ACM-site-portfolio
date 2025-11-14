
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./@/components*.{ts,tsx,js,jsx}",
    "./src*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    { pattern: /border-(yellow|green|purple|pink|teal|orange)-50/ },
    { pattern: /bg-(yellow|green|purple|pink|teal|orange)-50/ },
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      animation: {
        float: "float linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        yellow: {
          50: "#FEFCE8",
          500: "#EAB308",
        },
        green: {
          50: "#ECFDF5",
          500: "#10B981",
        },
        purple: {
          50: "#F5F3FF",
          500: "#8B5CF6",
        },
        pink: {
          50: "#FDF2F8",
          500: "#EC4899",
        },
        teal: {
          50: "#F0FDFA",
          500: "#14B8A6",
        },
        orange: {
          50: "#FFF7ED",
          500: "#F97316",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        righteous: ['"Righteous"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
