import { Button, Container, Typography } from "@mui/material";
import { CheckoutModal } from "../../common";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as classes from "./cart.styles";

type CartComponentProps = {
  removeId: (id: number) => void;
  clear: () => void;
  filterCart: {
    id: string;
    picUrl: string;
    title: string;
  }[];
  isCartVisible: boolean;
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  toggleCartVisibility: () => void;
};

export function CartComponent({
  removeId,
  clear,
  filterCart,
  isCartVisible,
  isModalVisible,
  setIsModalVisible,
  toggleCartVisibility,
}: CartComponentProps) {
  return (
    <Container className={classes.container}>
      <ShoppingCartIcon
        fontSize="large"
        className={classes.cartIcon}
        onClick={toggleCartVisibility}
        color="success"
      />

      {isCartVisible && (
        <div>
          <Typography variant="h4">Cart</Typography>
          {filterCart.map((pet) => (
            <div key={pet.id} className={classes.cartItem}>
              <img
                src={pet.picUrl}
                alt={pet.title}
                className={classes.cartImage}
              />
              <div className={classes.cartItemDetails}>
                <Typography variant="h6">{pet.title}</Typography>
              </div>
              <div>
                <DeleteIcon
                  onClick={() => removeId(Number(pet.id))}
                  className={classes.cartIcon}
                  color="error"
                />
              </div>
            </div>
          ))}

          {filterCart.length > 0 && (
            <div className={classes.cartButtons}>
              <Button
                variant="contained"
                onClick={() => setIsModalVisible(true)}
              >
                Go to Checkout
              </Button>
              <Button variant="contained" onClick={clear} color="error">
                Delete All
              </Button>
            </div>
          )}
        </div>
      )}

      <CheckoutModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        filterCart={filterCart}
      />
    </Container>
  );
}
