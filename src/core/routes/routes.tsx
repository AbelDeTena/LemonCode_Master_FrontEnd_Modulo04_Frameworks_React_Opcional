import { Route, Routes } from "react-router-dom";
import { ListScene } from "../../scenes/index"
import {MyComponent2} from "../../mycomponent copy"; 

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ListScene  />} />
      <Route path="/mycomponent2" element={<MyComponent2 />} />      
    </Routes>
  );
};


