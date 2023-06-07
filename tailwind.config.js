/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        // hurmeGeometricSans: ['HurmeGeometricSans1, cursive']
        primaryHurme: ["HurmeGeometricSans", "sans-serif"],
        boldHurme: ["HurmeGeometricSansBold", "sans-serif"]
        // poppins: "Poppins"
      },
    },
  },
  plugins: [],
}
