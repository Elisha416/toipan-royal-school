import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2E3A59', // Oxford Blue
          50: '#EEF0F4',
          100: '#DCE0E9',
          200: '#B9C2D3',
          300: '#96A3BD',
          400: '#7385A7',
          500: '#4F5E82',
          600: '#2E3A59', // Main color
          700: '#222C44',
          800: '#161D2E',
          900: '#0B0F19',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: '#FFD447', // Sunglow
          50: '#FFFDF5',
          100: '#FFF9E0',
          200: '#FFE894',
          300: '#FFE061',
          400: '#FFD447', // Main color
          500: '#FFC914',
          600: '#E0AE00',
          700: '#AD8700',
          800: '#7A6000',
          900: '#473800',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: '#4CD7D0', // Turquoise
          50: '#F0FBFA',
          100: '#D9F5F3',
          200: '#A7EAE6',
          300: '#75E0D9',
          400: '#4CD7D0', // Main color
          500: '#2DBEB6',
          600: '#239892',
          700: '#1A726D',
          800: '#114C48',
          900: '#092624',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: '#E74C3C', // Error Red
          foreground: 'hsl(var(--destructive-foreground))'
        },
        success: {
          DEFAULT: '#2ECC71', // Success Green
          50: '#EBF9F1',
          100: '#D7F3E3',
          200: '#AFE7C7',
          300: '#87DBAB',
          400: '#5FCF8F',
          500: '#2ECC71',
          600: '#25A85C',
          700: '#1C8447',
          800: '#145F32',
          900: '#0C3B1E'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        royal: {
          DEFAULT: '#1A478A', // Deep blue
          50: '#E6F2FF',
          100: '#B3DCFF',
          200: '#80C6FF',
          300: '#4DB0FF',
          400: '#1A9AFF',
          500: '#0A4C8A', // Darker blue
          600: '#1A478A', // Main blue
          700: '#133660',
          800: '#0D253A',
          900: '#061326',
        },
        crimson: {
          DEFAULT: '#DC143C', // Vibrant red
          50: '#FFE5E5',
          100: '#FFB3B3',
          200: '#FF8080',
          300: '#FF4D4D',
          400: '#FF1A1A',
          500: '#DC143C', // Main red
          600: '#B31030',
          700: '#8A0C24',
          800: '#610918',
          900: '#38050C',
        },
        gold: {
          DEFAULT: '#FFD700',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-slow': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-slow': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.3s ease-out'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
