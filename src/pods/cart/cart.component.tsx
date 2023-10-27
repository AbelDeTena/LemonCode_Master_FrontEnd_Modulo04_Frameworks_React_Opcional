import { Button, Container, Typography } from "@mui/material";
import { CheckoutModal } from "../../common";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as classes from "./cart.styles";
import { PictureInfo } from "../../data";
import { CartItem } from "./cart.item";

type CartComponentProps = {
  removeId: (id: number) => void;
  clear: () => void;
  filterCart: PictureInfo[];
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
            <CartItem pet={pet} removeId={removeId} key={pet.id}></CartItem>
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
