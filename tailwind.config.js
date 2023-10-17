/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "  node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: { sa: "#20FFFF", oe: "#111926" },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
