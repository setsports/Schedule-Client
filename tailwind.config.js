/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          from: {
            opacity: 0,
            scale: 0,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },
        zoomOut: {
          from: {
            opacity: 1,
            scale: 1,
          },
          to: {
            opacity: 0,
            scale: 0,
          },
        },
        popupIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        popupOut: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
            display: 'none',
          },
        },
        popupTopDown: {
          from: {
            opacity: 0,
            transform: 'translateY(-15px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        popupTopUp: {
          from: {
            opacity: 1,
            transform: 'translateY(0)',
          },
          to: {
            opacity: 0,
            transform: 'translateY(-15px)',
          },
        },
        dropdownToUp: {
          from: {
            opacity: 0,
            transform: 'translateY(15px) translateX(-50%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0) translateX(-50%)',
          },
        },
        dropdownToUpDesktop: {
          from: {
            opacity: 0,
            transform: 'translateY(15px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        popupIn: 'popupIn 0.15s linear',
        popupOut: 'popupOut 0.15s linear',
        popupTopDown: 'popupTopDown 0.15s linear',
        popupTopUp: 'popupTopUp 0.15s linear',
        dropdownTopUp: 'dropdownToUp 0.15s linear',
        dropdownToUpDesktop: 'dropdownToUpDesktop 0.15s linear',
        zoomIn: 'zoomIn 0.15s linear',
        zoomOut: 'zoomOut 0.15s linear',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.table-time': {
          fontFamily: 'Setantica Regular',
          '@screen sm': {
            fontFamily: 'Setantica Regular',
            fontWeight: '900',
          },
        },
      });
    },
  ],
};
