import React from "react";

function App() {
  const h1Style = {
    color: "red",
    fontWeight: "bold"
  };

  const users = [
    { id: 1, name: "Cory", email: "Cory@c.com" },
    { id: 3, name: "Megan", email: "Megan@m.com" },
    { id: 3, name: "Tammy", email: "Tammy@t.com" },
    { id: 4, name: "Jack", email: "Jack@j.com" }
  ];

  //debugger;
  return (
    <>
      <h1 className="header">hello App</h1>
      <label htmlFor="firstName" style={h1Style}>
        First Name:{" "}
      </label>
      <input id="fisrtName" type="text" />
      <p className="para">My para</p>
    </>
  );
}

export default App;
