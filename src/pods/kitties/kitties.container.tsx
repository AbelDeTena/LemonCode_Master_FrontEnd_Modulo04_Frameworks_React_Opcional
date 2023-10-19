import { useState, useEffect } from "react";
import { FromApiToVm, KittiesComponent } from "./component";
import { miKittiesList } from "./component/index";

export const Kitties = () => {
  const kitties = miKittiesList;
  const [filterKitties, setFilterKitties] = useState<FromApiToVm[]>([]);

  //contexto
  const [idArray, setIdArray] = useState<number[]>([]);
  const addId = (id: number) => {
    console.log("antes", idArray);
    setIdArray((prevIdArray) => {
      const noseque = [...prevIdArray, id];
      console.log({ noseque });
      return noseque;
    });
    console.log(idArray);
  };

  const removeId = (id: number) => {
    console.log("antes", idArray);
    setIdArray((prevIdArray) => prevIdArray.filter((item) => item !== id));
    console.log(idArray);
  };
  //fin del contexto

  useEffect(() => {
    const updatedFilterKitties = kitties.map((cat) => {
      //error en la condicion includes - in
      console.log(idArray.includes(cat.id));
      return {
        ...cat,
        selected: idArray.includes(cat.id),
      };
    });
    console.log("Updated Filter Kitties:", updatedFilterKitties);

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
