import React from "react";
import Users from "./users";
import { Route } from "react-router-dom";
import ManageUser from "./ManageUser";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />

      <Route path="/" component={Home}></Route>
      <Route path="/manageusers" component={ManageUser}></Route>
      <Route path="/users" component={Users}></Route>
    </>
  );
}

export default App;
