import { useContext } from "react";
import { MyContext } from "../../core/context/index";
import { Link } from 'react-router-dom';
import {switchRoutes} from "../../core/index"

export function List() {
  const { Kitties } = useContext(MyContext);

  return (
    <div>
       <Link to={switchRoutes.puppies}>
      <button>Navegar a MyComponent2</button>
    </Link>
      <h2>Kitties:</h2>
      <ul>
        {Kitties.map((kitty) => (
          <li key={kitty.id}>{kitty.title}
          <img src={kitty.picUrl} alt="laksd"  />
          </li>
        ))}
      </ul>      
    </div>    
  );
}

