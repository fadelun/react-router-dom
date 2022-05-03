import { useNavigate } from "react-router-dom";
// import { OrderSummary } from "./components/OrderSummary";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is home page</p>
      <button onClick={() => navigate("order-summary", { replace: true })}>place order</button>
    </div>
  );
};

export default Home;
