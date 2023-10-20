import { useContext } from "react";
import { MyContext } from "../../core/context/index";

export function Cart() {
  const { idArray } = useContext(MyContext);

  return (
    <div>
      <h1>Cart</h1>
      {idArray.map((id) => (
        <h2 key={id}>{id}</h2>
      ))}
    </div>
  );
}
