/** @type {import('tailwindcss').Config} */

const config = {

    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme: "#11001F",
            },
            fontFamily: {
                inter: ["inter", "sans-serif"],
                jetbrains: ["jetbrains mono", "monospace"],
                montserrat: ["montserrat", "sans-serif"],
            },
        },darkMode:'selector',
        plugins: [],
    },
};

export default config;
