import { ListLayout } from "../layout/index";
import { Kitties } from "../pods/index";

export const KittiesScene: React.FC = () => {
  return (
    <ListLayout>
      <Kitties />
    </ListLayout>
  );
};
