import { css } from "@emotion/css";

export const container = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex; 
`;

export const left = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;  
  width: 100%; 
  border: 2px solid black; 
  background: linear-gradient(to bottom, #ffffff, #E0E2E0);
`;

export const right = css`
  display: flex;
  flex-direction: column;  
`;
