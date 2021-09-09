import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar2";
import { Root_style, Root_style2 } from "./Root_st";
import Body01 from "./Body01/Body01";

function Root() {
  return (
    <div>
      <Root_style>
        <Sidebar />
        <Root_style2>
          <Navbar />
          <Body01 />
        </Root_style2>
      </Root_style>
    </div>
  );
}

export default Root;
