
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6">
        <h1 className="text-xl font-semibold text-center text-gray-800">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
