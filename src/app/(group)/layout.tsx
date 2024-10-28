import Card from "@/components/Card";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Test pages",
  description: "This is animation try",
};

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-5xl grid grid-rows-[400px,2fr,1fr]">
      <Header>
        <Nav />
        <Card
          title="Hero title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corrupti sint veritatis expedita voluptatum dolorem odit quisquam distinctio nemo quo, cupiditate nobis quidem iure quis animi non est totam! Numquam?"
          button="Get in touch"
          style="animate-slideRight text-white"
        />
      </Header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default GroupLayout;
