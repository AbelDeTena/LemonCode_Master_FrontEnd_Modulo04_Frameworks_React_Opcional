import { ListLayout } from "../layout/index";
import { Puppies } from "../pods/index";

export const PuppiesScene: React.FC = () => {
  return (
    <ListLayout>
      <Puppies />
    </ListLayout>
  );
};
