import React from "react";

function UserDetails({ number = 1 }) {
  console.log(number);
  return <div>Profile user {number}</div>;
}

export default UserDetails;
