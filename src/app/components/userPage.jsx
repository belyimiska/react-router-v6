import React from "react";
import { Link, Navigate, useParams, Outlet } from "react-router-dom";
import users from "./users";

const UserPage = () => {
  const { userId } = useParams();

  const getUserById = (id) => {
    return users.find((u) => u.id.toString() === id);
  };
  const user = getUserById(userId);

  const incorrectUser = users.find((u) => u.id === Number(userId));

  if (!incorrectUser) {
    return <Navigate to="/users" />;
  }

  return (
    <div>
      <h1>User Page</h1>
      <h3>{user ? user.name : `User with id:${userId} not found`}</h3>
      <Link to={`/users/${userId}/edit`}>Edit this user</Link>
      <p>{user && `userId:${userId}`}</p>

      <Outlet />
    </div>
  );
};

export default UserPage;
