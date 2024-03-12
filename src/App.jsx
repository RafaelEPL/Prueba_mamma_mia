import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import DetailsCart from "./views/DetailsCart";

function App() {
 

  return (
  <div>
    <Routes>
      <Route path="pizzas/">
          <Route path=":id" element={<Details />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<DetailsCart />} />
    </Routes>
  </div>
  );
};

export default App
