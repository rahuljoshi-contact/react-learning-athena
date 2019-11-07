import React, { useState, useEffect } from "react";
import getUsers, { deleteUser } from "./api/userApi";

function App() {
  const h1Style = {
    color: "red",
    fontWeight: "bold"
  };

  const [users, handleUsers] = useState([
    { id: 1, name: "Cory", email: "Cory@c.com" },
    { id: 2, name: "Megan", email: "Megan@m.com" },
    { id: 3, name: "Tammy", email: "Tammy@t.com" },
    { id: 4, name: "Jack", email: "Jack@j.com" }
  ]);

  // useEffect runs by default after every render
  // render happens after change state
  useEffect(() => {
    // using private _users to make it more unique
    getUsers().then(_users => handleUsers(_users));
  }, []);

  //const users = ;

  function handleDelete(id) {
    //debugger;
    // local deleting in place, no persistence
    // const newUsers = users.filter(user => user.id !== id);
    // handleUsers(newUsers);
    deleteUser(id).then(_users => handleUsers(_users));
  }
  //debugger;
  return (
    <>
      <h1 className="header">User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* delay execution using the arrow function */}
            <button name="Delete" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
            {user.name}
          </li>
        ))}
      </ul>

      <label htmlFor="firstName" style={h1Style}>
        First Name:{" "}
      </label>
      <input id="fisrtName" type="text" />
      <p className="para">My para</p>
    </>
  );
}

export default App;
