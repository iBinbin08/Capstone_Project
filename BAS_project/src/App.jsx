import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import BarangaySignUp from "./components/BarangaySignUp";
import UserSignUp from "./component/user/UserSignUp/userSignUp"

function App() {
  return (
    <>
      <LogIn />
      {/* <BarangaySignUp /> */}
      <UserSignUp />
    </>
  );
}

export default App;
