import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'selector',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            backgroundColor: {
                ind3x: '#222',
            },
            aspectRatio: {
                'sq': '1 / 1',
                'xm': '4 / 3',
                'xl': '16 / 9',
                '2xl': '21 / 9',
                'ym': '3 / 4',
                'yl': '9 / 16',
                '2yl': '9 / 21'
            },
            backgroundImage: {
                'grid': 'url(/image/grid.svg)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            dropShadow: {
                extra: '2px 4px 6px black'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};
export default config;
