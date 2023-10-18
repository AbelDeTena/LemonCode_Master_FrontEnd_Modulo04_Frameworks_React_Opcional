import React, { ReactNode } from "react";
import "./list.css";

interface ListLayoutProps {
  children: ReactNode;
}

export const ListLayout: React.FC<ListLayoutProps> = ({ children }) => {
  return <div className="containerStyle">{children}</div>;
};
