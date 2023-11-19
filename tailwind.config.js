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
        themes: ["winter", "night", "tiendazul", {

            "primary": "#27374D",

            "secondary": "#526D82",

            "accent": "#9DB2BF",

            "neutral": "#160004",

            "base-100": "#fff5e5",

            "info": "#008bff",

            "success": "#00c062",

            "warning": "#ffa700",

            "error": "#27374D",
        },],
    },

}
