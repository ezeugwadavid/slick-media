import styled from "styled-components";

export const CategoryContainer = styled.div`
  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 80%;
    margin-top: 63px;
    margin-left: 77px;
  }

  .label {
    text-align: left;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 4px;
  }

  .input {
    border: 1px solid #000000;
    padding: 10px;
    font-size: 20px;
  }

  .input:focus {
    border: 1px solid #000000;
  }

  .btn{
    cursor: pointer;
    display: flex;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    width: 70px;
    background-color: #4D90FE;
    color: #ffffff;
    border: 1px solid #4D90FE; 
  }

  .grid-container {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 90%;
    margin-left: 77px;
  }

  .category-name {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin-bottom: 18px;
    display: flex;
    justify-content: start;
  }

  .movie-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-x: scroll;
  }
  .movie-title {
    position: absolute;
    margin-top: 150px;
    margin-left: 100px;
    color: #ffffff;
    font-size: 20px;
    z-index: 1;
  }

  .movie-pic {
    padding: 10px;
    width: 300px;
    height: 300px;
    background: #000000;
    border-radius: 12px;
    position: relative;
  }

  .movie-box {
    padding-right: 10px;
  }

  @media screen and (max-width: 900px) {
    .search-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 81%;
      margin-top: 63px;
    }

    .movie-pic {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    .movie-pic {
      padding: 10px;
      background: #000000;
      border-radius: 12px;
      position: relative;
    }

    .search-container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin-top: 63px;
      margin-left: 57px;
    }
  }

  @media screen and (max-width: 400px) {
    width: 500px;
  }
`;
