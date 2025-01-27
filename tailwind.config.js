module.exports = {
  purge: {
    content: ["./src/**/*.html"],
    safelist: ["bg-customGoldenrod"],
  },
  theme: {
    extend: {
      colors: {
        customGoldenrod: "rgba(230, 166, 35, 0.1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
