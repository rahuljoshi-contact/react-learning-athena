import React, { useState } from "react";
import Input from "./input";
import { Redirect } from "react-router-dom";

const ManageUser = () => {
  function handleSubmit() {}

  // const match = useRouterMatch(); //info about matching URL
  // const { userid } = match.params;

  const [user, setUser] = useState({ name: "", email: "" });
  const [saveCompleted, setSaveCompleted] = useState(false);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Add User</p>
          <label>Name: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>Email: </label>
          <input type="email"></input>
        </div>
        <div>
          <input type="submit" value="Add User"></input>
        </div>
      </form>
    </>
  );
};

export default ManageUser;
