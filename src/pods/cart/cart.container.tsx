import { useContext, useState } from "react";
import { MyContext } from "../../core/context/index";
import { MockData } from "../../data/mockData";
import { CheckoutModal} from "../../common/index"

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
    <div>
      <button onClick={toggleCartVisibility}>
        {isCartVisible ? "Ocultar Carrito" : "Mostrar Carrito"}
      </button>

      {isCartVisible && (
        <div>
          <h1>Cart</h1>
          {filterCart.map((pet) => (
            <div key={pet.id}>
              <h2>{pet.title}</h2>
              <img src={pet.picUrl} alt={pet.title} />
              <button onClick={() => removeId(Number(pet.id))}>eliminar</button>
            </div>
          ))}

          {filterCart.length > 0 && (
            <button onClick={() => setIsModalVisible(true)}>Ir al Checkout</button>
          )}
          <button onClick={clear}>eliminar todos</button>
        </div>
      )}

      <CheckoutModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </div>
  );
}
