import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  padding-left: 43px;
  border-right: 2px solid #f2f2f2;
  /* flex: 1; */
  width: 240px;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 86px;
`;

export const Logo = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

export const Logo_text = styled.p`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #304858;
`;

export const Menu = styled.h1`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 19px;
  color: #3629b7;
`;

const common = css`
  display: flex;
  margin-bottom: 0px;
  align-items: center;
`;

export const Item = styled.div`
  ${common}
`;

export const Item_text = styled.p`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 17px;
  color: #838383;
  padding-left: 15px;
`;

export const Menu02 = styled.div`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  padding-top: 100px;
  padding-bottom: 30px;
  color: #3629b7;
`;

export const Sardonic = styled.div`
  width: 180px;
  height: 60px;
  margin: 110px 25px 50px 0px;
  display: flex;
  background-color: #f9faff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
`;

export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 10px 0px 10px 10px;
`;

export const Sardor = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 14px;
  color: #591aed;
  text-align: center;
  vertical-align: top;
  width: 41px;
  height: 14px;
  padding: 10px 0px 10px 20px;
  cursor: pointer;
`;

export const Btn = styled.button`
  background-color: #f9faff;
  border: none;
  cursor: pointer;
  width: 60px;
  height: 40px;
  margin: 10px 5px 10px 20px;
  -webkit-transform: rotate(-90deg);
`;
