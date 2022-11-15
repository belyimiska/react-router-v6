import React from "react";
import { Link, useParams } from "react-router-dom";

const EditUserPage = () => {
  const { userId } = useParams();
  const nextUser = Number(userId) + 1;

  return (
    <div>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${nextUser}`}>Another User</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditUserPage;
