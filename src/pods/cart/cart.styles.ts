import { css } from "@emotion/css";
import { theme } from "../../core/theme";

export const container = css`
  background-color: ${theme.palette.primary[50]};
  border: 2px solid ${theme.palette.dark[400]};
  padding: ${theme.spacing(3)};  
`;

export const cartIcon = css`
  cursor: pointer;
  color: ${theme.palette.success[700]};
`;

export const cartItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.secondary[200]};
  margin-bottom: ${theme.spacing(3)};
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
  gap: ${theme.spacing(1)};
`;