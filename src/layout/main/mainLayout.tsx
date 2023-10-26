import React, { ReactNode } from "react";
import { Theme } from "../../core";
import * as classes from "./main.style";

interface ChildrenComponentProps {
  children: [ReactNode, ReactNode];
}

export const MainLayout: React.FC<ChildrenComponentProps> = ({ children }) => {
  const [left, right] = children;

  return (
    <Theme>
      <div className={classes.container}>
        <div className={classes.left}>{left}</div>
        <div className={classes.right}>{right}</div>
      </div>
    </Theme>
  );
};
