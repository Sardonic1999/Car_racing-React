import React from "react";
import {
  Nav_con,
  Nav_input1,
  Nav_input2,
  Icons1,
  UserImg,
  Position,
  Input01,
  Input02,
} from "./Nav_style";
import { FaBell, FaUser, FaSearch, FaAngleDown } from "react-icons/fa";
import user from "../assets/user.JPG";

function Navbar() {
  return (
    <Nav_con>
      <Nav_input1>
        <Input01 placeholder="Search for a race, car or racer" type="text" />
        <Position>
          <FaSearch style={{ width: "50px", cursor: "pointer" }} />
        </Position>
      </Nav_input1>
      <Nav_input2>
        <Input02 placeholder="Choose a car" type="text" />
        <Position>
          <FaAngleDown style={{ width: "50px", cursor: "pointer" }} />
        </Position>
      </Nav_input2>
      <Icons1>
        <FaBell
          style={{ paddingRight: "40px", cursor: "pointer", color: "grey" }}
        />
        <FaUser
          style={{ paddingRight: "40px", cursor: "pointer", color: "grey" }}
        />
      </Icons1>
      <UserImg src={user} alt=""></UserImg>
    </Nav_con>
  );
}

export default Navbar;
