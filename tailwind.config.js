/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["winter", "night", "tiendazul": {

            "primary": "#00b8e4",

            "secondary": "#f99800",

            "accent": "#00cb00",

            "neutral": "#160004",

            "base-100": "#fff5e5",

            "info": "#008bff",

            "success": "#00c062",

            "warning": "#ffa700",

            "error": "#fb4c6a",
        },],
    },

}
