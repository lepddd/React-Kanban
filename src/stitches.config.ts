import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap')",
  ],
  
  "*": { margin: 0, padding: 0, boxSizing: "border-box", fontFamily:'Ubuntu'},
});

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {},
});
