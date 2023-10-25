import { useState, useEffect, useContext } from "react";
import { FromApiToVm, PuppiesComponent } from "./component";
import { myPuppieList } from "./component/index"; // Importa myPuppieList
import { MyContext } from "../../core/index";
import { MockData } from "../../data";

export const Puppies = () => {
  const [filterPuppies, setFilterPuppies] = useState<FromApiToVm[]>([]);
  const { idArray, addId, removeId } = useContext(MyContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const dogs = await myPuppieList(MockData); 
        const updatedFilterPuppies = dogs.map((dog) => {
          return {
            ...dog,
            selected: idArray.includes(dog.id),
          };
        });

        setFilterPuppies(updatedFilterPuppies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [idArray]);

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
