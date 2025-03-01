import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-dark)',
        foreground: 'var(--foreground)',
        backgroundDark: 'var(--background-dark)',
        backgroundLight: 'var(--background-light)',
        backgroundGreen: 'var(--background-green)',
        textWhite: 'var(--text-white)',
        textDark: 'var(--text-dark)',
        textGreen: 'var(--text-green)',
        textGray: 'var(--text-gray)',
      },
    },
  },
  plugins: [],
} satisfies Config;
