import { css } from "@emotion/css";

export const container = css`   
  padding: 20px;  
`;

export const cartIcon = css`
  cursor: pointer;  
`;

export const cartItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #CCFCC6;
  margin-bottom: 16px;
  border-radius: 5px;
  overflow: hidden;
`;

export const cartImage = css`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const cartItemDetails = css`
  display: flex;
  flex-direction: column;
`;

export const cartButtons = css`
  gap: 16px;
`;
