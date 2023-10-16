import { ListLayout } from "../../layout/index";
import { List, Cart } from "../../pods/index";

export const KittiesScene: React.FC = () => {  
  return (
    <ListLayout>
      <List />
      <Cart />
    </ListLayout>
  );
};
