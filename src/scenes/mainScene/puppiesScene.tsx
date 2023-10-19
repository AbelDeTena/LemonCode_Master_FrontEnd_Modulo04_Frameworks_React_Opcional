import { ListLayout } from "../../layout/index";
import { Puppies, Kitties } from "../../pods/index";

export const PuppiesScene: React.FC = () => {
  return (
    <ListLayout>
      <Kitties />
    </ListLayout>
  );
};
