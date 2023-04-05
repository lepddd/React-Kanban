// stitches.config.js
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {},
  media: {
    bp1: "(min-width: 380px)",
    bp2: "(min-width: 1040px)",
    bp3: "(min-width: 1380px)",
  },
  utils: {
    square: (value) => ({ width: value, height: value }),
  },
});
