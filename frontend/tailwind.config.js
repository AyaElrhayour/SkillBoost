const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('./src/assets/home_wallpaper.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};