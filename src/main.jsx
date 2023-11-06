import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //
import App from "./App.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import SideBarProvider from "./contexts/SidebarContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <App />
        <ToastContainer position="top-center" autoClose={1500} />
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
