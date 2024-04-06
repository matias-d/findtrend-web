/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';
import animations from '@midudev/tailwind-animations';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        color: {
          p: {
            1: '#A8FF35',
            2: '#87D322',
            3: '#8CC83A',
          },
          b: {
            1: '#2A2A2A',
            2: '#181818',
            3: '#8B8B8B',
            4: '#ADADAD',
            5: '#030303',
          },
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        indie: ['var(--font-indie)', 'cursive'],
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        '.h1': {
          '@apply font-extrabold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem]  lg:text-6xl lg:leading-[4.0625rem] xl:text-7xl xl:leading-[4.5rem]':
            {},
        },
        '.h2': {
          '@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem]  lg:text-6xl lg:leading-[4.0625rem] xl:text-7xl xl:leading-[4.5rem]':
            {},
        },
        '.h3': {
          '@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem]  lg:text-[3.50rem] lg:leading-[4.0625rem] xl:text-[3.80rem] xl:leading-[4.5rem]':
            {},
        },
        '.body-1': {
          '@apply font-normal text-[0.9rem] lg:text-lg': {},
        },
      });
    }),
    animations,
  ],
};
