import { ListLayout } from "../../layout/index";
import { Kitties } from "../../pods/index";

export const PuppiesScene: React.FC = () => {
  return (
    <ListLayout>
      <Kitties />
    </ListLayout>
  );
};
