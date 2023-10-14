import { Route, Routes } from "react-router-dom";
import {MyComponent} from "../../mycomponent"; 
import {MyComponent2} from "../../mycomponent copy"; 

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/mycomponent2" element={<MyComponent2 />} />      
    </Routes>
  );
};


