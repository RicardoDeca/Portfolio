import styled from "styled-components";
export const Section = styled.section`
  background-color: #faedcd;
  height: 90vh;
  @media (max-width: 400px) {
    height: 100;
    figure {
      display: none;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  height: 70%;
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    figure {
      img {
        min-width: 0px;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 70%;
  }
`;
export const H1 = styled.h1`
  height: fit-content;
  width: 80%;
  height: 20%;
  font-family: "kanit";
  text-align: center;
  font-size: 2rem;
  min-width: 350px;
  @media (max-width: 500px) {
    font-size: 1.5rem;
    width: 100%;
    text-align: right;
    min-width: 0;
  }
`;
export const H2 = styled.h2`
  height: fit-content;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Inter Tight";
  text-align: right;
  span {
    font-family: "Bebas Neue";
    color: #d4a373;
    letter-spacing: 2px;
    font-size: 3rem;
  }
`;
export const P = styled.p`
  width: 100%;
  font-family: "Inter Tight";
  font-weight: bold;
  font-size: 1.3rem;
  text-align: right;
  width: 60%;
  min-width: 300px;
  @media (max-width: 500px) {
    min-width: 150px;
    width: fit-content;
  }
`;
export const Figure = styled.figure`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
    min-width: 200px;
    border-radius: 50%;
  }
`;
export const DivLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 30%;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
  a {
    height: fit-content;
  }
  img {
    margin-left: 10px;
    height: 50px;
    &:hover {
      transform: scale(1.1);
      transition-duration: 1s;
    }
  }
`;
