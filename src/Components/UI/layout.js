import React, { Fragment, useState } from "react";
import Navbar from "./navbar";
import MainDisplay from "./MainDisplay";

function Layout() {

  return (
    <Fragment>
      <Navbar />
      <MainDisplay></MainDisplay>
    </Fragment>
  );
}

export default Layout;
