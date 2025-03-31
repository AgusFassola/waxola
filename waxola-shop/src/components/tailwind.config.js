import type { config } from 'tailwindcss';

const config: config = {
    darkMode:'class',
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
  export default config;