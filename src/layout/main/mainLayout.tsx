import React, { ReactNode } from "react";
import "./main.css";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode, ReactNode];
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [header, aside, main] = children;

  return (
    <div className="container">
      <div className="div1">{header}</div>
      <div className="div2">{aside}</div>
      <div className="div2">{main}</div>
    </div>
  );
};
