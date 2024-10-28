# Simple animation in react

- framer motion to animate when element is in view of screen
- default intersection API can be used, but framer motion is easier for this, just 2 lines of code :>

## Install framer motion

- Already installed in this repo

[Framer motion](https://www.framer.com/motion/introduction/)

## Framer motion instead intersection API

- Only

```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: false });

<article
  ref={ref}
  className={`flex flex-col gap-4 w-2/4 mt-10 mx-10 ${
    isInView && "animate-appear"
  }`}
>
  Article data here...
</article>;
```
