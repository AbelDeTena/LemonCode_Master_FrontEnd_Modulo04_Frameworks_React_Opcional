import { ListLayout } from "../../layout/index";
import { List, Cart } from "../../pods/index";
import { MyContext } from "../../core/context/index";
import { useContext } from "react";
import { MyContextData } from "../../core/index";

export const KittiesScene: React.FC = () => {
  const context: MyContextData = useContext(MyContext);

  return (
    <ListLayout>
      <List details={context.Kitties} />
      <Cart />
    </ListLayout>
  );
};
