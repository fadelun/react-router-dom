import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  const [number, setNumber] = useState(null);

  return (
    <div style={{ color: "blue" }}>
      {/* <Link>link 1</Link>
      <Link>link 2</Link>
      <Link>link 3</Link> */}
      <Link to="1" style={{ marginLeft: "40px" }}>
        user 1
      </Link>
      <Link to="2" style={{ marginLeft: "40px" }}>
        user 2
      </Link>
      <Link to="3" style={{ marginLeft: "40px" }}>
        user 3
      </Link>
      <Outlet />
    </div>
  );
}

export default Users;
