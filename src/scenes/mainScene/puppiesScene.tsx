import { ListLayout } from "../../layout/index";
import { List, Cart } from "../../pods/index";

export const PuppiesScene: React.FC = () => {  
  return (
    <ListLayout>
      <List />
      <Cart />
    </ListLayout>
  );
};
