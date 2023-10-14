import { useContext } from "react";
import { MyContext } from "../../core/context/index";

export function Cart() {
  const { Kitties, Puppies } = useContext(MyContext);

  return (
    <div>
      <h1>kart</h1>
      <h2>Kitties:</h2>
      <ul>
        {Kitties.map((kitty) => (
          <li key={kitty.id}>{kitty.title}</li>
        ))}
      </ul>

      <h2>Puppies:</h2>
      <ul>
        {Puppies.map((puppy) => (
          <li key={puppy.id}>{puppy.title}</li>
        ))}
      </ul>
    </div>
  );
}
