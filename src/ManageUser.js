import React from "react";

const ManageUser = () => {
  function handleSubmit() {}

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
