import type { Config } from "tailwindcss";

export default {
  content: [
    "./client/index.html", 
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    // Mobile-first responsive breakpoints
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Responsive font sizes for better mobile readability
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Mobile-optimized heading sizes
        'h1-mobile': ['2rem', { lineHeight: '2.25rem' }],
        'h2-mobile': ['1.75rem', { lineHeight: '2rem' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.75rem' }],
        'h4-mobile': ['1.25rem', { lineHeight: '1.5rem' }],
        'h5-mobile': ['1.125rem', { lineHeight: '1.375rem' }],
        'h6-mobile': ['1rem', { lineHeight: '1.25rem' }],
      },
      // Responsive spacing for better mobile layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Mobile-specific spacing
        'mobile-xs': '0.5rem',
        'mobile-sm': '0.75rem',
        'mobile-md': '1rem',
        'mobile-lg': '1.5rem',
        'mobile-xl': '2rem',
      },
      colors: {
        "abu-bg": "var(--abu-bg)",
        "abu-stroke": "var(--abu-stroke)",
        "app-primary": "var(--app-primary)",
        "app-secondary": "var(--app-secondary)",
        black: "var(--black)",
        "dark-green": "var(--dark-green)",
        "highlight-c1": "var(--highlight-c1)",
        "logo-color": "var(--logo-color)",
        "neutral-100": "var(--neutral-100)",
        "neutral-50": "var(--neutral-50)",
        neutralwhite: "var(--neutralwhite)",
        "tag-green": "var(--tag-green)",
        text: "var(--text)",
        textblack: "var(--textblack)",
        texthighlight: "var(--texthighlight)",
        textwhite: "var(--textwhite)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-large-body-large-regular":
          "var(--body-large-body-large-regular-font-family)",
        "body-large-body-large-semibold":
          "var(--body-large-body-large-semibold-font-family)",
        "body-medium-body-medium-bold":
          "var(--body-medium-body-medium-bold-font-family)",
        "body-medium-body-medium-regular":
          "var(--body-medium-body-medium-regular-font-family)",
        "h1-h1-semibold": "var(--h1-h1-semibold-font-family)",
        "h2-h2-bold": "var(--h2-h2-bold-font-family)",
        "h3-h3-semibold": "var(--h3-h3-semibold-font-family)",
        "h4-h4-semibold": "var(--h4-h4-semibold-font-family)",
        "h5-h5-bold": "var(--h5-h5-bold-font-family)",
        "h5-h5-semibold": "var(--h5-h5-semibold-font-family)",
        "h6-h6-regular": "var(--h6-h6-regular-font-family)",
        "h6-h6-semibold": "var(--h6-h6-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(74, 139, 123, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(74, 139, 123, 0)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-slow": "fade-in-slow 1s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    // Add custom utilities for mobile responsiveness
    function({ addUtilities }) {
      const newUtilities = {
        // Touch-friendly button sizes
        '.btn-touch': {
          minHeight: '44px',
          minWidth: '44px',
          padding: '12px 16px',
        },
        '.btn-touch-lg': {
          minHeight: '48px',
          minWidth: '48px',
          padding: '16px 24px',
        },
        // Mobile-optimized text sizes
        '.text-mobile-h1': {
          fontSize: '2rem',
          lineHeight: '2.25rem',
          fontWeight: '700',
        },
        '.text-mobile-h2': {
          fontSize: '1.75rem',
          lineHeight: '2rem',
          fontWeight: '600',
        },
        '.text-mobile-h3': {
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
          fontWeight: '600',
        },
        '.text-mobile-body': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
        '.text-mobile-small': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
        // Responsive image utilities
        '.img-responsive': {
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
        },
        '.img-aspect-square': {
          aspectRatio: '1 / 1',
          objectFit: 'cover',
        },
        '.img-aspect-video': {
          aspectRatio: '16 / 9',
          objectFit: 'cover',
        },
        // Mobile-friendly form inputs
        '.input-mobile': {
          minHeight: '44px',
          fontSize: '16px', // Prevents zoom on iOS
          padding: '12px 16px',
        },
        // Safe area padding for mobile devices
        '.safe-area-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        // Full-screen container utilities
        '.container-fullscreen': {
          width: '100%',
          minHeight: '100vh',
        },
        '.container-inner': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 640px)': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
          '@media (min-width: 768px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width: 1024px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width: 1280px)': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
          },
          '@media (min-width: 1536px)': {
            paddingLeft: '6rem',
            paddingRight: '6rem',
          },
        },
        '.section-fullscreen': {
          width: '100%',
          paddingTop: '0rem',
          paddingBottom: '2rem',
          '@media (min-width: 640px)': {
            paddingTop: '1rem',
            paddingBottom: '3rem',
          },
          '@media (min-width: 1024px)': {
            paddingTop: '1rem',
            paddingBottom: '4rem',
          },
          '@media (min-width: 1280px)': {
            paddingTop: '1rem',
            paddingBottom: '7rem',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
  darkMode: ["class"],
} satisfies Config;
