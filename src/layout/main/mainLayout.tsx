import React, { ReactNode } from "react";
import "./main.css";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode];
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [header, cart] = children;

  return (
    <div className="container">
      <div className="header">{header}</div>
      <div className="cart">{cart}</div>
    </div>
  );
};
