import { useContext } from "react";
import { MyContext } from "./core/index";

export function MyComponent2() {
  const {  Puppies } = useContext(MyContext);

  return (
    <div>
      <h2>Puppies:</h2>
      <ul>
        {Puppies.map((puppy) => (
          <li key={puppy.id}>{puppy.title}
          <h3>{puppy.id}</h3></li>
        ))}
      </ul>
    </div>
  );
}

