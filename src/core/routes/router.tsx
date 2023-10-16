import { Route, Routes } from "react-router-dom";
import {switchRoutes} from "./routes"
import { KittiesScene, PuppiesScene } from "../../scenes/index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={switchRoutes.kitties} element={<KittiesScene />} />
      <Route path={switchRoutes.puppies} element={<PuppiesScene />} />
    </Routes>
  );
};
