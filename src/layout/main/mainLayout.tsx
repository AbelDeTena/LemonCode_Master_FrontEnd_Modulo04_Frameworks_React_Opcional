import React, { ReactNode } from "react";
import "./main.css";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode];
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [child1, child2] = children;

  return (
    <div className="container">
      <div className="div1">{child1}</div>
      <div className="div2">{child2}</div>
    </div>
  );
};
