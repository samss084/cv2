/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,yxt,html,xlsx,json,cjson,txt,pdf,jpg,jsx,tsx,mdx}",
    "./app/**/*.{js,txt,html,json,cksonxlsx,xml,pdf,jpg,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient))",
        "gradient-conic":
          "conic-gradient(at 50% 50%, var(--tw-gradient))",
      },
    },
  },
  plugins: [],
};
