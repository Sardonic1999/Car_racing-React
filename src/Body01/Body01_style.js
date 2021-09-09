import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1220px;
  height: 900;
  background-color: red;
  background: #fbfcff;
  flex: 1;
`;

export const Card_wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 100px 110px 100px;
  margin: 0px;
`;

export const Cards = styled.div`
  background: #fefeff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
  border-radius: 10px;
  width: 100px;
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    color: #050801;
    transform: scale(0.9);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
