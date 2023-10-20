import React from "react";

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Checkout</h1>        
        <button onClick={onClose}>Cerrar</button>
        <button>Realizar Pedido</button>
      </div>
    </div>
  );
};


