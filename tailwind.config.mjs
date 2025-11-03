/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'text-blue-600',
    'bg-gray-200',
    'shadow-xl',
    'underline'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}