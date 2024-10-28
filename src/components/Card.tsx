import React from "react";

type Props = {
  title: string;
  subTitle?: string;
  text: string;
  button: string;
  style?: string;
};

const Card = ({ title, subTitle, text, button, style }: Props) => {
  return (
    <article className={`flex flex-col gap-4 w-2/4 mt-10 mx-10 ${style}`}>
      <header>
        <h2 className="text-5xl">{title.toUpperCase()}</h2>
      </header>
      {subTitle && <h3>{subTitle}</h3>}
      <p className="text-[clamp(1.125rem,2vw,1.25rem)]">{text}</p>
      <div className="px-2 bg-blue-600">
        <button>{button}</button>
      </div>
    </article>
  );
};

export default Card;