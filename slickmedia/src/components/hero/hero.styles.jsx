import styled from "styled-components";
import HeroImage from "../../assets/Rectangle-5.svg";

export const HeroContainer = styled.div`
  height: 450px;
  background-image: url(${HeroImage});

  .text {
    display: flex;
    justify-content: start;
    text-align: left;
    width: 20%;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 94px;
    letter-spacing: -0.05em;
    position: absolute;
    left: 77px;
    top: 210px;

    color: #ffffff;
  }

  @media screen and (max-width: 900px) {
    .text {
      position: absolute;
      left: 31%;
      top: 210px;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    .text {
      position: absolute;
      left: 23%;
      top: 210px;
      text-align: center;
    }
  }
  @media screen and (max-width: 400px) {
    width: 600px;

    .text {
      position: absolute;
      left: 40%;
      top: 210px;
      text-align: center;
      font-size: 40px;
      width: 100%;
      letter-spacing: 0.05em;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 440px) {
    .text {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 300px) {
    width: 600px;

    .text {
      position: absolute;
      left: 60%;
      top: 210px;
      text-align: center;
      font-size: 35px;
      width: 300px;
      letter-spacing: 0em;
      font-weight: 700;
    }
  }
`;
