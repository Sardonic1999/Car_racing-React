import React from "react";
import {
  Sidebar,
  LogoWrapper,
  Logo,
  Logo_text,
  Menu,
  Item,
  Item_text,
  Menu02,
  Sardonic,
  UserImg,
  Sardor,
  Btn,
} from "./Side_style";
import logo from "../assets/logo.png";
import Union from "../assets/Union.png";
import category from "../assets/category.png";
import payment from "../assets/payment.png";
import group from "../assets/group.png";
import calculator from "../assets/calculator.png";
import settings from "../assets/settings.png";
import { FaCircle } from "react-icons/fa";
import user from "../assets/user.JPG";

function Sidebar2() {
  return (
    <Sidebar>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <Logo_text>iffee</Logo_text>
      </LogoWrapper>
      <Menu>Menu</Menu>
      <Item>
        <img src={Union} alt="" />
        <Item_text>Home</Item_text>
      </Item>
      <Item>
        <img src={category} alt="" />
        <Item_text>Garage</Item_text>
      </Item>
      <Item>
        <img src={payment} alt="" />
        <Item_text>Service Menu</Item_text>
      </Item>
      <Item>
        <img src={group} alt="" />
        <Item_text>Racers</Item_text>
      </Item>
      <Item>
        <img src={calculator} alt="" />
        <Item_text>Calculator</Item_text>
      </Item>
      <Item>
        <img src={settings} alt="" />
        <Item_text>Settings</Item_text>
      </Item>
      <Menu02>Scheduled Races</Menu02>
      <Item>
        <FaCircle style={{ color: "blue" }} />
        <Item_text>MotoGP 2022</Item_text>
      </Item>
      <Item>
        <FaCircle style={{ color: "red" }} />
        <Item_text>Dynamics 22</Item_text>
      </Item>
      <Item className="item02 last-item02">
        <FaCircle style={{ color: "green" }} />
        <Item_text>Olympics</Item_text>
      </Item>
      <Sardonic>
        <UserImg src={user} alt=""></UserImg>
        <Sardor>Sardor</Sardor>
        <Btn>{"<"}</Btn>
      </Sardonic>
    </Sidebar>
  );
}

export default Sidebar2;
