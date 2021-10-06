import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";

export default function Section() {
  return (
    <div>
      <Route path="/" exact component={Home}></Route>
    </div>
  );
}
