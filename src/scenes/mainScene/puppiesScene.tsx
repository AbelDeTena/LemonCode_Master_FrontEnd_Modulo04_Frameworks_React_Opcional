import { ListLayout } from "../../layout/index";
import { List } from "../../pods/index";
import { MyContext } from "../../core/context/index";
import { useContext } from "react";
import { MyContextData } from "../../core/index";

export const PuppiesScene: React.FC = () => {
  const context: MyContextData = useContext(MyContext);

  return (
    <ListLayout>
      <List details={context.Puppies} />     
    </ListLayout>
  );
};
