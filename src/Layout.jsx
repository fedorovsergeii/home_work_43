import React from 'react';
import {Outlet} from "react-router";
import HeaderMenu from "./components/";

const Layout = () => {
  return (
    <div>
      <HeaderMenu/>
      <Outlet/>
    </div>
  );
};

export default Layout;