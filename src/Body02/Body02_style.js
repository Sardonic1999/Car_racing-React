import styled, { css } from "styled-components";

export const Inf = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 2;
`;

const center = css`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  ${center}
`;

export const Right = styled.div`
  flex: 1;
`;

export const Infinit = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: unset;
  font-size: 40px;
  padding-right: 200px;
  padding-left: 112px;
`;

const same = css`
  display: flex;
  width: 50px;
  height: 50px;
  background: #fefeff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  color: #838383;
  transition: all 0.5s;
  :hover {
    transform: scale(0.8);
  }
`;
export const Angel_left = styled.div`
  ${same}
`;

export const Angel_right = styled.div`
  ${same}
`;

export const Car = styled.img`
  padding-left: 75px;
`;

export const Right_it = styled.div`
  ${center}
`;

const getColor = ({ background }) => {
  switch (background) {
    case "cat":
      return "pink";
    case "moon":
      return "#F5F0FF";
    case "Vector":
      return "lightgrey";
    default:
      return "black";
  }
};

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${getColor};
  border-radius: 60px;
  text-align: center;
  margin-right: 25px;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    transform: scale(0.8);
  }
`;

export const Text = styled.p`
  color: #9ba6b2;
`;
