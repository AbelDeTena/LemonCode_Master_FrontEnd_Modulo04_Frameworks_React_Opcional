import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { PictureInfo } from "../../data";
import * as classes from "./cart.styles";

type CartItemProps = {
  removeId: (id: number) => void;
  pet: PictureInfo;
};

export function CartItem({ removeId, pet }: CartItemProps) {
  return (
    <div key={pet.id} className={classes.cartItem}>
      <img src={pet.picUrl} alt={pet.title} className={classes.cartImage} />
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
  );
}
