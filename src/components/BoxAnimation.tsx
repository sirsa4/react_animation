"use client";
import { useAnimate, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";

const BoxAnimation = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isMoved, setIsMoved] = useState(false);

  const handleAnimate = async () => {
    if (!isMoved) {
      // Move the box
      await animate(scope.current.querySelector(".box"), {
        opacity: 1,
        x: 150,
      });
      await animate(".box", { rotate: "360deg" });
      await animate(scope.current.querySelector(".box"), {
        opacity: 1,
        y: 200,
      });
      setIsMoved(true); // Update state to indicate it has moved
    } else {
      // Reset the box by following the reverse path
      await animate(scope.current.querySelector(".box"), {
        opacity: 1,
        y: 0,
      });
      await animate(".box", { rotate: "0deg" });
      await animate(scope.current.querySelector(".box"), {
        opacity: 1,
        x: 0,
      });

      setIsMoved(false); // Reset state to initial
    }
  };

  return (
    <div ref={scope} className="h-screen grid place-items-center">
      <div className=" ">
        <div className="box h-32 w-32 bg-cyan-500 rounded" />
        <button
          className="mt-4 px-4 py-2 rounded-md font-bold text-white bg-slate-900"
          onClick={handleAnimate}
        >
          Animate box
        </button>
      </div>
    </div>
  );
};

export default BoxAnimation;
