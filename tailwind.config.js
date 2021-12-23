const plugin = require("tailwindcss/plugin");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  mode: "jit",
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "0rem",
      },
    },
    extend: {
      // create custom text colors here
      textColor: {
        primary: withOpacity("--text-accent"),
        base: withOpacity("--text-base"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        footer: withOpacity("--bg-footer"),
        muted: withOpacity("--bg-muted"),
        primary: withOpacity("--primary-800"),
        "primary-800": withOpacity("--primary-800"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    }),
  ],
};
