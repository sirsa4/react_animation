import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="p-4 bg-hero-image bg-cover bg-center rounded-br-lg rounded-bl-xl">
      {children}
    </header>
  );
};

export default Header;
