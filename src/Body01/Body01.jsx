import React from "react";
import { Wrapper, Card_wrap, Cards } from "./Body01_style";
import key from "../assets/key.png";
import circle from "../assets/circle.png";
import set from "../assets/set.png";
import power from "../assets/power.png";
import tire from "../assets/tire.png";
import lock from "../assets/lock.png";
import Body02 from "../Body02/Body02";
import Body03 from "../Body03/Body03";

function Body01() {
  return (
    <Wrapper>
      <Card_wrap>
        <Cards>
          <img src={key} alt="" />
          <p>Start</p>
        </Cards>
        <Cards>
          <img src={circle} alt="" />
          <p>Drive</p>
        </Cards>
        <Cards>
          <img src={set} alt="" />
          <p>Maintinance</p>
        </Cards>
        <Cards>
          <img src={power} alt="" />
          <p>Battery</p>
        </Cards>
        <Cards>
          <img src={tire} alt="" />
          <p>Tires</p>
        </Cards>
        <Cards>
          <img src={lock} alt="" />
          <p>Lock</p>
        </Cards>
      </Card_wrap>
      <Body02 />
      <Body03 />
    </Wrapper>
  );
}

export default Body01;
