import { useContext, useState } from "react";
import { MyContext } from "../../core/context/index";
import { MockData } from "../../data/mockData";
import { Button, Container, Typography } from "@mui/material";
import { CheckoutModal } from "../../common";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
    <Container>
      <ShoppingCartIcon
        color="primary"
        fontSize="large"
        style={{ cursor: "pointer" }}
        onClick={toggleCartVisibility}
      />

      {isCartVisible && (
        <div>
          <Typography variant="h4">Cart</Typography>
          {filterCart.map((pet) => (
            <div key={pet.id} style={{ display: "flex", alignItems: "center" }}>
              <img
                src={pet.picUrl}
                alt={pet.title}
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                  objectFit: "cover",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">{pet.title}</Typography>
              </div>
              <div>
                <DeleteIcon
                  color="secondary"
                  onClick={() => removeId(Number(pet.id))}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}

          {filterCart.length > 0 && (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsModalVisible(true)}
              >
                Ir al Checkout
              </Button>
              <Button variant="contained" color="secondary" onClick={clear}>
                Eliminar todos
              </Button>
            </div>
          )}
        </div>
      )}

      <CheckoutModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </Container>
  );
}
