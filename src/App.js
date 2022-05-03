import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import { Featured } from "./components/products/Featured";
import { New } from "./components/products/New";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
