import { useState, useEffect } from "react";
import { FromApiToVm, KittiesComponent } from "./component";
import { miKittiesList } from "./component/index";

export const Kitties = () => {
  const kitties = miKittiesList;
  const [idArray, setIdArray] = useState<number[]>([]);
  const [filterKitties, setFilterKitties] = useState<FromApiToVm[]>([]);

  useEffect(() => {
    const updatedFilterKitties = kitties.map((cat) => ({
      ...cat,
      selected: cat.id in idArray,
    }));
    console.log("Updated Filter Kitties:", updatedFilterKitties);

    setFilterKitties(updatedFilterKitties);
  }, [idArray, kitties]);

  const addId = (id: number) => {
    setIdArray((prevIdArray) => [...prevIdArray, id]);
  };

  const removeId = (id: number) => {
    setIdArray((prevIdArray) => prevIdArray.filter((item) => item !== id));
  };

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
