import { ReactNode, createContext } from "react";
import { Kitties, Puppies } from "../../data/index";
import { PictureInfo } from "../../data/index";

export interface MyContextData {
  Kitties: PictureInfo[]; 
  Puppies: PictureInfo[]; 
}

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextData>({
  Kitties,
  Puppies,
});

export function MyContextProvider({ children }: MyContextProviderProps) {
  const value: MyContextData = {
    Kitties,
    Puppies,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
