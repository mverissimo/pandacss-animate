# PandaCSS animate

PandaCSS Animate is a preset for Panda CSS designed to facilitate the creation of elegant animations within your projects.

## Installation

Install PandaCSS Animate via npm:

```sh
npm install -D pandacss-animate
```

Then, integrate the preset into your `panda.config.ts` file as follows:

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

Avaible utilities `fadeIn`, `slideInY`, `slideInX`, `spinIn`, `zoomIn`, to enter animations to elements.

## Exit animations

Avaible utilities `fadeOut`, `slideOutY`, `slideOutX`, `spinOut`, `zoomOut`, to exit animations to elements.

### Fade

The fade animations include `fadeIn` and `fadeOut`, utilizing opacity tokens.

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

Slide animations include `slideInX`, `slideOutX`, `slideInY`, and `slideOutY`, using spacing tokens to determine direction and distance.

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

Spin animations include `spinIn` and `spinOut`, utilizing various degree values.

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

Zoom animations consist of `zoomIn` and `zoomOut`, allowing for scaling effects.

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

## Duration

Modify the duration of animations using the `duration` utility.

```tsx
import { css } from "../styled-system/css";

<button
  className={css({
    fadeIn: "10",
    duration: "500",
  })}
>
  A fade transition
</button>;
```

## Arbitrary value

For custom values, consider utilizing [strict tokes](https://panda-css.com/docs/concepts/writing-styles#stricttokens) provided by Panda CSS.

## Acknowledgement

This preset was inspired by [tailwind-animate](https://github.com/jamiebuilds/tailwindcss-animate) 🚀
