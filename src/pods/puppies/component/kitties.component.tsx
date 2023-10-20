import { List } from "../../../common/index";
import { FromApiToVm } from "./index";

interface PuppiesComponentProps {
  filterPuppies: FromApiToVm[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

export const PuppiesComponent = ({
  filterPuppies,
  addId,
  removeId,
}: PuppiesComponentProps) => {
  return (
    <>
      <List details={filterPuppies} addId={addId} removeId={removeId} />
    </>
  );
};
