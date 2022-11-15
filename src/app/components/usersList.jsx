import React from "react";
import { Redirect, useParams } from "react-router-dom";
import UserPage from "./userPage";
import users from "./users";
import { Link } from "react-router-dom";
import EditUserPage from "./editUserPage";

const UsersList = () => {
  const params = useParams();
  const { userId, edit } = params;

  return (
    <>
      {userId ? (
        userId === "5" ? (
          <Redirect to="/users" />
        ) : edit ? (
          <EditUserPage userId={userId} />
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <div>
          <h1>Users List Page</h1>
          <ul>
            {users.map((u) => (
              <Link key={u.id} to={`users/${u.id}`}>
                <li>{u.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UsersList;
