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
        themes: [{
            "tiendazul": {

            "primary": "#27374D",

            "secondary": "#526D82",

            "accent": "#9DB2BF",

                "neutral": "#16171d",
                "base-100": "#FAF8ED",
                "info": "#80B3FF",
                "success": "#5cbc5f",
                "warning": "#ffcc00",

            "error": "#27374D",
            }
        }],
    }

}
