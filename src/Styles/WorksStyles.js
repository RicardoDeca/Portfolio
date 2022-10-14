import styled from "styled-components";
import "../styles.css";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ccd5ae;
`;
export const Div = styled.div`
  width: 90%;
  border: solid red;
  margin-top: 2%;
  display: flex;
  min-height: 50vh;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DivText = styled.div`
  border: solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  height: fit-content;
  right: 25%;
  animation: slide 3s 1s linear forwards;
  @keyframes slide {
    from {
      right: 25%;
    }
    to {
      right: 0%;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    right: 0%;
    top: -25%;
  }
`;
export const H3 = styled.h3`
  border: solid;
  text-align: center;
  font-family: "Bebas Neue";
  font-size: 1.5rem;
`;
export const P = styled.p`
  background-color: pink;
  width: 90%;
  font-family: "Inter Tight";
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Img = styled.img`
  object-fit: scale-down;
  background-color: #ccd5ae;
  width: 50%;
  position: relative;
  left: 25%;
  z-index: 1;
  animation: slideImg 3s 1s linear forwards;
  @keyframes slideImg {
    from {
      left: 25%;
    }
    to {
      left: 0%;
    }
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
export const boxMobile = styled.div`
  display: flex;
  width: 90%;
  img {
    object-fit: scale-down;
    max-height: 300px;
  }
`;
