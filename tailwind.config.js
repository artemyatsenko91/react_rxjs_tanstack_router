/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
        theme: {
            extend: {
                colors: {
                    blackA2: "#191919",
                    blackA6: "#252525",
                },
                boxShadow: {
                    blackA6: "0 0 0 1px #191919",
                },
            },
        },
    },
    plugins: [],
};
