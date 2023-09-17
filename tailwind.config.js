/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary:"#37b10e",
            primaryDark: "#31a309"    
         },
      },
      plugins: [],
   },
};
