import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchPrams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div style={{ color: "green" }}>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
      <Outlet />
      <button onClick={() => setSearchPrams({ filter: "active" })}>Active Users</button>
      <button onClick={() => setSearchPrams({})}>Reset Filter</button>
      {showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing All users</h2>}
    </div>
  );
};

export default Users;
