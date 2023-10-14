import React from "react";

import { ListLayout } from "../../layout/index";
import { List, Cart } from "../../pods/index";

export const ListScene: React.FC = () => {
  return (
    <ListLayout>
      <List />
      <Cart />
    </ListLayout>
  );
};
