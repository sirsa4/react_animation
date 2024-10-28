"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  title: string;
  subTitle?: string;
  text: string;
  button: string;
  style?: string;
  animation?: string;
};

const Article = ({
  title,
  subTitle,
  text,
  button,
  style,
  animation,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <article
      ref={ref}
      className={`flex flex-col gap-4 w-2/4 mt-10 mx-10 ${
        isInView && animation
      } ${style}`}
    >
      <header>
        <h2 className="text-5xl">{title.toUpperCase()}</h2>
      </header>
      {subTitle && <h3>{subTitle}</h3>}
      <p className="text-[clamp(1.125rem,2vw,1.25rem)]">{text}</p>
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded active:animate-scaleUp">
          {button}
        </button>
      </div>
    </article>
  );
};

export default Article;
