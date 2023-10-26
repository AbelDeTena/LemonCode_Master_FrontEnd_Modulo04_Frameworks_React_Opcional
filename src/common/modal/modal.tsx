import React from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
  filterCart: {
    id: string;
    picUrl: string;
    title: string;
  }[];
}

const sendOrder = () => alert("Pedido realizado");

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  onClose,
  filterCart,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal open={visible} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Checkout
        </Typography>
        <p>You are about to place the following order:</p>
        {filterCart.map((pet) => (
          <p>{pet.title}</p>
        ))}

        <Button variant="contained" color="success" onClick={sendOrder} >
          Place Order
        </Button>

        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </Paper>
    </Modal>
  );
};
