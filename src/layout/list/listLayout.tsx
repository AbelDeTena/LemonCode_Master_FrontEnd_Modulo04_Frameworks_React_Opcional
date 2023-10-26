import React, { ReactNode } from "react";


interface ListLayoutProps {
  children: ReactNode;
}

export const ListLayout: React.FC<ListLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
