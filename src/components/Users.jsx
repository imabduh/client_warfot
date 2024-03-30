import { useContext, useState } from "react";
import UserItem from "./UserItem";
import ApiContext from "../contexts/ApiContext";

function Users() {
  const { users } = useContext(ApiContext);

  return (
    <div className="text-sm mx-3">
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
}

export default Users;
