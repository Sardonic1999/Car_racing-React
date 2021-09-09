import styled, { css } from "styled-components";

export const Nav_con = styled.div`
  width: 1220px;
  height: 78px;
  background: #fbfcff;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  align-items: center;

  /* flex: 1; */
`;

export const Nav_input1 = styled.div`
  margin-right: 34px;
  margin-left: 45px;
  width: 500px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder {
    color: #bcbdc2;
    position: relative;
  }
`;
export const Input01 = styled.input`
  width: 500px;
  height: 48px;
  padding-left: 50px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder {
    color: #bcbdc2;
  }
`;

export const Nav_input2 = styled.div`
  height: 50px;
  width: 300px;

  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 64px;
  ::placeholder {
    color: #bcbdc2;
  }
`;

export const Input02 = styled.input`
  height: 50px;
  width: 300px;
  padding-left: 50px;

  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 64px;
  ::placeholder {
    color: #bcbdc2;
  }
`;

export const Icons1 = styled.div`
  font-size: 28px;
  padding-left: 30px;
`;

export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Position = styled.div`
  position: absolute;
  color: #bcbdc2;
  top: 30px;
`;
