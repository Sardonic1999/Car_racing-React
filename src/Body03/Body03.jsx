import React from "react";
import { Wrapper, Left } from "../Body03/Body03_style";
import left from "../assets/left.png";
import right from "../assets/right.png";

function Body03() {
  return (
    <Wrapper>
      <Left>
        <img style={{ padding: "35px" }} src={left} alt="" />
      </Left>
      <Left>
        <img style={{ padding: "35px" }} src={right} alt="" />
      </Left>
    </Wrapper>
  );
}

export default Body03;
