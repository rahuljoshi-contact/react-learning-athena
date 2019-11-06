import React, { useState } from "react";

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

  //const users = ;

  function handleDelete(id) {
    //debugger;
    const newUsers = users.filter(user => user.id !== id);
    handleUsers(newUsers);
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
