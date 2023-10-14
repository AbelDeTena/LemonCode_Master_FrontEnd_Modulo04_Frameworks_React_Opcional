import React, { ReactNode } from "react";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode];
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [child1, child2] = children;

  return (
    <div>
      <div>{child1}</div>
      <div>{child2}</div>
    </div>
  );
};


