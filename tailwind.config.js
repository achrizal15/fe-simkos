/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            transitionProperty: {
                bgImage: 'background-image',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                sm: '20px',
                lg: '40px',
            },
        },
    },
    plugins: [],
};
