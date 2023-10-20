import { createContext, ReactNode, useState } from "react";

interface IdContextType {
  idArray: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

export const MyContext = createContext<IdContextType>({
  idArray: [],
  addId: () => {},
  removeId: () => {},
});

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [idArray, setIdArray] = useState<number[]>([]);

  const addId = (id: number) => {
    setIdArray((prevIdArray) => [...prevIdArray, id]);
  };

  const removeId = (id: number) => {
    setIdArray((prevIdArray) => prevIdArray.filter((item) => item !== id));
  };

  return (
    <MyContext.Provider value={{ idArray, addId, removeId }}>
      {children}
    </MyContext.Provider>
  );
}
