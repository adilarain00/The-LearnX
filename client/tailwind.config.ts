/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1440px",
      },
    },

    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      colors: {
        brand: {
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
          light: "#6366F1",
        },

        background: {
          light: "#F8F9FC",
          dark: "#0E0F12",
          card: "#FFFFFF",
          cardDark: "#1A1B1E",
        },

        textColor: {
          light: "#111827",
          dark: "#E5E7EB",
          muted: "#6B7280",
        },
      },

      borderRadius: {
        lg: "16px",
        xl: "20px",
        "2xl": "26px",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.06)",
        medium: "0 8px 24px rgba(0,0,0,0.08)",
        heavy: "0 12px 48px rgba(0,0,0,0.12)",
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "800px": "800px",
      },

      animation: {
        fade: "fade 0.3s ease-in-out",
        slideUp: "slideUp 0.4s ease-out",
        slideDown: "slideDown 0.4s ease-out",
      },

      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
