import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { MyContextProvider } from "./core/index";
import { MainLayout } from "./layout/index";
import { Header } from "./common/index";
import { AppRoutes } from "./core/index";
import { Cart } from "./pods/index"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MyContextProvider>
    <Router>
      <MainLayout>
        <Header />
        <AppRoutes />
        <Cart />
      </MainLayout>
    </Router>
  </MyContextProvider>
);
