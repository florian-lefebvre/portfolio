module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh"
      },
      height: {
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh"
      }
    }
  },
  variants: {},
  plugins: []
};
