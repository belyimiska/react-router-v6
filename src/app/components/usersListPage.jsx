import React from "react";
import users from "./users";
import { Link, Outlet } from "react-router-dom";

const UsersListPage = () => {
  return (
    <div>
      <h1>Users List Page</h1>
      <ul>
        {users.map((u) => (
          <Link key={u.id} to={`/users/${u.id}`}>
            <li>{u.name}</li>
          </Link>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default UsersListPage;
