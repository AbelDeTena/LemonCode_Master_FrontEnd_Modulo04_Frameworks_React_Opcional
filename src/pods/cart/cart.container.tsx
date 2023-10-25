import { useContext, useState } from "react";
import { MyContext } from "../../core/context/index";
import { MockData } from "../../data/mockData";

import {CartComponent} from "./cart.component"


export function Cart() {
  const { idArray, removeId, clear } = useContext(MyContext);
  const { kitties, puppies } = MockData;

  const cart = [...kitties, ...puppies];
  const filterCart = cart.filter((pet) => idArray.includes(Number(pet.id)));

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  return (    
    <CartComponent
    removeId={removeId}
    clear={clear}
    filterCart={filterCart}
    isCartVisible={isCartVisible}
    isModalVisible={isModalVisible}
    setIsModalVisible={setIsModalVisible}
    toggleCartVisibility={toggleCartVisibility}
  />
  );
}
