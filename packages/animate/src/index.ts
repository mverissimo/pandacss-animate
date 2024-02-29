import { definePreset } from "@pandacss/dev";

const SCALE = [
  "0",
  "0.5",
  "0.75",
  "0.90",
  "0.95",
  "1",
  "1.05",
  "1.1",
  "1.25",
  "1.5",
];

const ROTATE = ["0", "1", "2", "3", "6", "12", "45", "90", "180"];

export default definePreset({
  theme: {
    extend: {
      keyframes: {
        enter: {
          from: {
            opacity: "var(--panda-enter-opacity, 1)",
            transform:
              "translate3d(var(--panda-enter-translate-x, 0), var(--panda-enter-translate-y, 0), 0) scale3d(var(--panda-enter-scale, 1), var(--panda-enter-scale, 1), var(--panda-enter-scale, 1)) rotate(var(--panda-enter-rotate, 0))",
          },
        },
        exit: {
          to: {
            opacity: "var(--panda-exit-opacity, 1)",
            transform:
              "translate3d(var(--panda-exit-translate-x, 0), var(--panda-exit-translate-y, 0), 0) scale3d(var(--panda-exit-scale, 1), var(--panda-exit-scale, 1), var(--panda-exit-scale, 1)) rotate(var(--panda-exit-rotate, 0))",
          },
        },
      },
      tokens: {
        durations: {
          0: {
            value: "0s",
          },
          75: {
            value: "75ms",
          },
          100: {
            value: "100ms",
          },
          150: {
            value: "150ms",
          },
          200: {
            value: "200ms",
          },
          300: {
            value: "300ms",
          },
          500: {
            value: "500ms",
          },
          700: {
            value: "700ms",
          },
          1000: {
            value: "1000ms",
          },
        },
        opacity: {
          0: {
            value: "0",
          },
          5: {
            value: "0.05",
          },
          10: {
            value: "0.1",
          },
          15: {
            value: "0.15",
          },
          20: {
            value: "0.2",
          },
          25: {
            value: "0.25",
          },
          30: {
            value: "0.3",
          },
          35: {
            value: "0.35",
          },
          40: {
            value: "0.4",
          },
          45: {
            value: "0.45",
          },
          50: {
            value: "0.5",
          },
          55: {
            value: "0.55",
          },
          60: {
            value: "0.6",
          },
          65: {
            value: "0.65",
          },
          70: {
            value: "0.7",
          },
          75: {
            value: "0.75",
          },
          80: {
            value: "0.8",
          },
          85: {
            value: "0.85",
          },
          90: {
            value: "0.9",
          },
          95: {
            value: "0.95",
          },
          100: {
            value: "1",
          },
        },
        spacing: {
          "1/2": {
            value: "50%",
          },
          "1/3": {
            value: "33.333333%",
          },
          "2/3": {
            value: "66.666667%",
          },
          "1/4": {
            value: "25%",
          },
          "2/4": {
            value: "50%",
          },
          "3/4": {
            value: "75%",
          },
          full: {
            value: "100%",
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      animate: {
        values: ["in", "out"],
        className: "animate",
        transform(value) {
          return {
            animationName: value === "in" ? "enter" : "exit",
            animationDuration: "var(--panda-animation-duration, 300ms)",
            "--panda-enter-opacity": "initial",
            "--panda-enter-scale": "initial",
            "--panda-enter-rotate": "initial",
            "--panda-enter-translate-x": "initial",
            "--panda-enter-translate-y": "initial",
          };
        },
      },
      duration: {
        values: "durations",
        transform(value) {
          return {
            "--panda-animation-duration": value,
          };
        },
      },
      animationDelay: {
        values: "durations",
        transform(value) {
          return {
            animationDelay: value,
          };
        },
      },
      fadeIn: {
        className: "fade-in",
        values: "opacity",
        transform(value) {
          return {
            "--panda-enter-opacity": value,
          };
        },
      },
      fadeOut: {
        className: "fade-out",
        values: "opacity",
        transform(value) {
          return {
            "--panda-exit-opacity": value,
          };
        },
      },
      zoomIn: {
        className: "zoom-in",
        values: SCALE,
        transform(value) {
          return {
            "--panda-enter-scale": value,
          };
        },
      },
      zoomOut: {
        className: "zoom-out",
        values: SCALE,
        transform(value) {
          return {
            "--panda-exit-scale": value,
          };
        },
      },
      spinIn: {
        className: "spin-in",
        values: ROTATE,
        transform(value) {
          return {
            "--panda-enter-rotate": `${value}deg`,
          };
        },
      },
      spinOut: {
        className: "spin-out",
        values: ROTATE,
        transform(value) {
          return {
            "--panda-exit-rotate": `${value}deg`,
          };
        },
      },
      slideInY: {
        className: "slide-in-y",
        values: "spacing",
        transform(value) {
          return {
            "--panda-enter-translate-y": value,
          };
        },
      },
      slideInX: {
        className: "slide-in-x",
        values: "spacing",
        transform(value) {
          return {
            "--panda-enter-translate-x": value,
          };
        },
      },
      slideOutY: {
        className: "slide-out-y",
        values: "spacing",
        transform(value) {
          return {
            "--panda-exit-translate-y": value,
          };
        },
      },
      slideOutX: {
        className: "slide-out-x",
        values: "spacing",
        transform(value) {
          return {
            "--panda-exit-translate-x": value,
          };
        },
      },
    },
  },
});
