import { useState, useEffect, useContext } from "react";
import { FromApiToVm, KittiesComponent } from "./component";
import { miKittiesList } from "./component/index";
import { MyContext } from "../../core/index";

export const Kitties = () => {
  const kitties = miKittiesList;
  const [filterKitties, setFilterKitties] = useState<FromApiToVm[]>([]);
  const { idArray, addId, removeId } = useContext(MyContext);

  useEffect(() => {
    const updatedFilterKitties = kitties.map((cat) => {
      return {
        ...cat,
        selected: idArray.includes(cat.id),
      };
    });
    setFilterKitties(updatedFilterKitties);
  }, [idArray, kitties]);

  return (
    <>
      <KittiesComponent
        filterKitties={filterKitties}
        addId={addId}
        removeId={removeId}
      />
    </>
  );
};
