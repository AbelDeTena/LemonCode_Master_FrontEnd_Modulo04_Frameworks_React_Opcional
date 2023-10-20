import { createContext, ReactNode, useState } from "react";

interface IdContextType {
  idArray: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
  clear: ()=> void;
}

export const MyContext = createContext<IdContextType>({
  idArray: [],
  addId: () => {},
  removeId: () => {},
  clear: ()=>{}
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

  const clear = () => {
    setIdArray([])
  }


  return (
    <MyContext.Provider value={{ idArray, addId, removeId, clear }}>
      {children}
    </MyContext.Provider>
  );
}
