import React from "react";
import {
  Inf,
  Left,
  Right,
  Infinit,
  Info,
  Angel_right,
  Angel_left,
  Car,
  Right_it,
  Circle,
  Text,
} from "./Body02_style";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import car from "../assets/Car.png";
import cat from "../assets/cat.png";
import moon from "../assets/moon.png";
import Vector from "../assets/Vector.png";

function Body02() {
  return (
    <Inf>
      <Left>
        <Info>
          <Infinit>
            Infiniti Renault{" "}
            <sup style={{ marginBottom: "100px", fontSize: "25px" }}>TM</sup>
          </Infinit>
          <Angel_left>
            <FaAngleDoubleLeft />
          </Angel_left>
          <Angel_right>
            <FaAngleDoubleRight />
          </Angel_right>
        </Info>
        <Car src={car} alt="cars"></Car>
      </Left>
      <Right>
        <Right_it>
          <Circle background={"cat"}>
            <img
              style={{ padding: "13px 13px 13px 13px" }}
              src={cat}
              alt="user01"
            />
          </Circle>
          <div>
            <h2>72</h2>
            <Text>Championships</Text>
          </div>
        </Right_it>
        <Right_it>
          <Circle background={"moon"}>
            <img
              style={{ padding: "10px 10px 10px 10px" }}
              src={moon}
              alt="user01"
            />
          </Circle>
          <div>
            <h2>32</h2>
            <Text>Skins</Text>
          </div>
        </Right_it>
        <Right_it>
          <Circle background={"Vector"}>
            <img
              style={{ padding: "13px 13px 13px 13px" }}
              src={Vector}
              alt="user01"
            />
          </Circle>
          <div>
            <h2>64</h2>
            <Text>Trophies Won</Text>
          </div>
        </Right_it>
      </Right>
    </Inf>
  );
}

export default Body02;
