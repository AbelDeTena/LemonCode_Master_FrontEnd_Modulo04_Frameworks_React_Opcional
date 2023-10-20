import { useState, useEffect, useContext } from "react";
import { FromApiToVm, PuppiesComponent } from "./component";
import { miPuppiesList } from "./component/index";
import { MyContext } from "../../core/index";

export const Puppies = () => {
  const puppies = miPuppiesList;
  const [filterPuppies, setFilterPuppies] = useState<FromApiToVm[]>([]);
  const { idArray, addId, removeId } = useContext(MyContext);

  useEffect(() => {
    const updatedFilterPuppies = puppies.map((dog) => {
      return {
        ...dog,
        selected: idArray.includes(dog.id),
      };
    });

    setFilterPuppies(updatedFilterPuppies);
  }, [idArray, puppies]);

  return (
    <>
      <PuppiesComponent
        filterPuppies={filterPuppies}
        addId={addId}
        removeId={removeId}
      />
    </>
  );
};
