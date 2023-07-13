import { useState } from "react";
import LogIn from "./components/LogIn";
import BarangaySignUp from "./components/BarangaySignUp";
import UserSignUp from "./component/user/UserSignUp/userSignUp"
import UserNavbar from "./component/user/UserNavbarSidebar/userNavbar"
import UserSidebar from "./component/user/UserNavbarSidebar/userSidebar"
import Sidebartest from "./component/user/UserNavbarSidebar/sideBar"
import Navbartest from "./component/user/UserNavbarSidebar/navBar"

function App() {
  return (
    <>
      
      <UserNavbar />
      <Sidebartest />
    </>
  );
}

export default App;
