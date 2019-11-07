import React, { useState, useEffect } from "react";
import getUsers, { deleteUser } from "./api/userApi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
    deleteUser(id).then(() => {
      const newUsers = users.filter(user => user.id !== id);
      handleUsers(newUsers);
    });
  }
  //debugger;
  return (
    <>
      <table border="1" className="table">
        <thead>
          <tr>
            <td>
              <b>Id</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Email</b>
            </td>
            <td>
              <b>Action</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button name="Delete" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
