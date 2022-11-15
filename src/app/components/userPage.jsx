import React from "react";
import { Link } from "react-router-dom";
import users from "./users";

const UserPage = ({ userId }) => {
  const getUserById = (id) => {
    return users.find((u) => u.id.toString() === id);
  };
  const user = getUserById(userId);

  return (
    <div>
      <h1>User Page</h1>
      <h3>{user ? user.name : `User with id:${userId} not found`}</h3>
      <Link to={`/users/${userId}/edit`}>Edit this user</Link>
      <p>{user && `userId:${userId}`}</p>
    </div>
  );
};

export default UserPage;
