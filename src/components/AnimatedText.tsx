"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  text: string | string[];
  element?: keyof JSX.IntrinsicElements;
  className?: string;
  noRepeat?: boolean;
  direction?: number;
  amountInView?: number;
  delayRepeat?: number;
};

const defaultAnimation = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AnimatedText = ({
  text,
  element: Wrapper = "p",
  className,
  noRepeat = true,
  direction = 1,
  amountInView = 0.5,
  delayRepeat,
}: Props) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const inView = useInView(ref, { once: noRepeat });

  useEffect(() => {
    let timeOut: NodeJS.Timeout | null = null;
    const show = () => {
      controls.start("visible");
      if (delayRepeat) {
        timeOut = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, delayRepeat);
      }
    };
    if (inView) {
      show();
    } else {
      controls.start("hidden");
    }
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [inView]);

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.01,
              amount: amountInView,
              staggerDirection: direction,
            },
          },
          hidden: {},
        }}
      >
        {textArray.map((line, index) => {
          return (
            <span key={index} className="block">
              {line.split(" ").map((word, index) => {
                return (
                  <span key={index} className="inline-block">
                    {word.split("").map((char, index) => {
                      return (
                        <motion.span key={index} variants={defaultAnimation}>
                          {char}
                        </motion.span>
                      );
                    })}
                    <span className="inline-block">&nbsp;</span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
