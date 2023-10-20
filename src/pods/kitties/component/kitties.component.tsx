import { List } from "../../../common/index";
import { FromApiToVm } from "./index";

interface KittiesComponentProps {
  filterKitties: FromApiToVm[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

export const KittiesComponent = ({
  filterKitties,
  addId,
  removeId,
}: KittiesComponentProps) => {
  return (
    <>
      <List details={filterKitties} addId={addId} removeId={removeId} />
    </>
  );
};
