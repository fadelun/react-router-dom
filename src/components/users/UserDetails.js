import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  // option 1
  const { userId } = useParams();

  //   option 2
  //   const params = useParams();
  //   const userId = params.userId;

  return <div>Profile user {userId}</div>;
}

export default UserDetails;
