import React, { ReactNode } from "react";
import "./list.css";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode];
}

export const ListLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [child1, child2] = children;

 
  return (
    <div className="containerStyle">
      <div className="divStyle1">{child1}</div>
      <div className="divStyle2">{child2}</div>
    </div>
  );
};
