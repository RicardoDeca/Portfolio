import styled from "styled-components";
import "../styles.css";
export const Section = styled.section`
  background-color: #e9edc9;
  height: 90vh;
  @media (max-height: 500px) {
    height: fit-content;
  }
  @media (max-width: 1060px) {
    height: fit-content;
  }
`;
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: space-around;
`;
export const H2 = styled.h2`
  text-align: center;
  font-family: "Bebas Neue";
  height: 15vh;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  font-size: 2rem;
  color: #d4a373;
  text-shadow: 1px 1px black;
`;
export const P = styled.p`
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.2em;
  text-indent: 1.2em;
  text-align: justify;
  letter-spacing: 1px;
  font-family: "Inter Tight";
`;
export const Fieldset = styled.fieldset`
  width: 90%;
  border: solid 0.1px #d4a373;
  display: flex;
  legend {
    font-size: 1.5rem;
    font-family: "Inter Tight";
    font-weight: 800;
    color: #d4a373;
  }
  img {
    width: 50px;
    margin-left: 5%;
    max-height: 70.56px;
  }
  figure {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 3%;
    max-height: 70.56px;
    figcaption {
      font-size: 0.7rem;
      text-align: center;
      font-weight: bold;
      margin-bottom: 4px;
      letter-spacing: 1px;
      font-family: "Luckiest Guy";
    }
  }
`;
export const Img = styled.img`
  height: 90%;
  margin-left: 0%;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 25%;
`;
export const Span = styled.span`
  font-family: "Bebas Neue";
  font-size: 2rem;
  color: #d4a373;
  text-shadow: 1px 1px black;
`;
