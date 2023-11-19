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
                "primary": "#F9B572",
                "secondary": "#A7D397",
                "accent": "#64CCC5",
                "neutral": "#16171d",
                "base-100": "#FAF8ED",
                "info": "#80B3FF",
                "success": "#5cbc5f",
                "warning": "#ffcc00",
                "error": "#fb4b71",
            },
        },],
    }

}
