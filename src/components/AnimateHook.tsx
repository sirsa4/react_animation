"use client";
import { easeInOut, useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

const AnimateHook = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current.querySelectorAll("p"), {
        opacity: 1,
        transition: { duration: 5, easeInOut },
      });
    } else {
      animate(scope.current.querySelectorAll("p"), { opacity: 0 });
    }
  }, [isInView, animate]);

  return (
    <div ref={scope}>
      <p style={{ opacity: 0 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quod?
      </p>
      <p style={{ opacity: 0 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, odit.
      </p>
      <p style={{ opacity: 0 }}>lorem10</p>
    </div>
  );
};

export default AnimateHook;
