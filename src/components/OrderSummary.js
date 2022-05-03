import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    //   useNavigate -1 is used to go to the previous page
    <>
      <div>Order confirmed!</div> <button onClick={() => navigate(-1)}>go to back</button>
    </>
  );
};
