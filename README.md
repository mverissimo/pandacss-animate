# PandaCSS animate

A Panda CSS preset for creating beautiful animations.

## Installation

```sh
npm install -D pandacss-animate
```

Then add the preset to your `panda.config.ts` file:

```ts
import { defineConfig } from "@pandacss/dev";
import pandaAnimate from "pandacss-animate";

export default defineConfig({
  theme: {
    extend: {},
  },
  presets: [pandaAnimate],
});
```

## Usage

The preset offers utilities to enter and exit animations.

## Enter animations

Use some of these utilities `fadeIn`, `slideInY`, `slideInX`, `spinIn`, `zoomIn`, to give an element an enter animation.

## Exit animations

Use some of these utilities `fadeOut`, `slideOutY`, `slideOutX`, `spinOut`, `zoomOut`, to give an element an exit animation.

### Fade

| key | value |
| fadeIn | opacity tokens |
| fadeOut | opacity tokens |

```tsx
import { css } from "../styled-system/css";

<button
  className={css({
    fadeIn: "10",
  })}
>
  A fade transition
</button>;
```

### Slide

| key | value |
| slideInX | [spacing tokens](https://panda-css.com/docs/customization/theme#spacing) |
| slideOutX | [spacing tokens](https://panda-css.com/docs/customization/theme#spacing) |
| slideInY | [spacing tokens](https://panda-css.com/docs/customization/theme#spacing) |
| slideOutY | [spacing tokens](https://panda-css.com/docs/customization/theme#spacing) |

To animate an element sliding from the left/top, apply a negative value, while a positive value will achieve the sliding effect from the right/bottom, eg:

```tsx
import { css } from "../styled-system/css";

<button
  className={css({
    // slide from bottom
    slideInY: "10",

    // slide from top
    slideInY: "-10",

    // slide from right
    slideInX: "10",

    // slide from left
    slideInX: "-10",
  })}
>
  A slide transition
</button>;
```

### Spin

| key | value |
| spinIn | "0", "1", "2", "3", "6", "12", "45", "90", "180" |
| spinOut | "0", "1", "2", "3", "6", "12", "45", "90", "180" |

```tsx
import { css } from "../styled-system/css";

<button
  className={css({
    spinIn: "45",
  })}
>
  A spin in transition
</button>;
```

### Zoom

| key | value |
| zoomIn | "0", "0.5", "0.75", "0.90", "0.95", "1", "1.05", "1.1", "1.25", "1.5" |
| zoomOut | "0", "0.5", "0.75", "0.90", "0.95", "1", "1.05", "1.1", "1.25", "1.5" |

```tsx
import { css } from "../styled-system/css";

<button
  className={css({
    zoomIn: "45",
  })}
>
  A zoom in transition
</button>;
```

## Arbitrary value

To use a custom value consider use [strict tokes](https://panda-css.com/docs/concepts/writing-styles#stricttokens)

## Acknowledgement

This preset was inspired on [tailwind-animate](https://github.com/jamiebuilds/tailwindcss-animate)
