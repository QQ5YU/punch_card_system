import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        loginInput: "#F1F8FA",
        buttonBlueHover: "#0AACDD90",
        buttonOrange: "#DD614A",
        buttonBlue: "#0AACDD",
        mainBlue: "#043593",
        darkBlue: "#1B2751",
        checkedPurple: "#7F56D9",
      },
      boxShadow: {
        input:
          " 0 10px 15px -3px rgb(4 53 147 / 0.2), 0 4px 6px -4px rgb(4 53 147 / 0.2)",
        record: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}
export default config
