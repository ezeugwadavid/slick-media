import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 140px;
  background: #292929;

  .name {
    border: 1px solid #ffffff;
    color: #ffffff;
    height: 32.94px;
    font-weight: 400;
    padding: 8px;
    font-size: 25px;
    font-family: "Inter", sans-serif;
    position: absolute;
    left: 77px;
    top: 40px;
  }

  @media screen and (max-width: 900px) {
    .name {
      position: absolute;
      left: 41%;
      top: 40px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 600px;
    .name {
      position: absolute;
      left: 70%;
      top: 40px;
    }
  }

  @media screen and (max-width: 300px) {
    width: 600px;
    .name {
      position: absolute;
      left: 90%;
      top: 40px;
    }
  }
`;
