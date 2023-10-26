import { css } from "@emotion/css";

export const container = css`    
  width: 100%;   
  height: 90vh;
  display: flex;
  flex-direction: column;  
  gap: 20px;
  padding: 20px;  
`;

export const petsContainer = css`    
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px;  
  `;
  
  export const pet = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
  }
`;

export const img = css`
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;