import { useState, useEffect, useContext } from "react";
import { FromApiToVm, KittiesComponent } from "./component";
import { myKittieList } from "./component/index";
import { MyContext } from "../../core/index";
import { MockData } from "../../data";

export const Kitties = () => {
  const [filterKitties, setFilterKitties] = useState<FromApiToVm[]>([]);
  const { idArray, addId, removeId } = useContext(MyContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const kitties = await myKittieList(MockData);
        const updatedFilterKitties = kitties.map((cat) => {
          return {
            ...cat,
            selected: idArray.includes(cat.id),
          };
        });

        setFilterKitties(updatedFilterKitties);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [idArray]);

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
