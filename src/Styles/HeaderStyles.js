import styled from "styled-components";
import "../styles.css";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  background-color: #d4a373;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: space-evenly;
    figure {
      margin-left: 0;
    }
    img {
      width: 100%;
    }
    nav {
      width: 100%;
    }
  }
`;
export const Nav = styled.nav`
  width: 60%;
  min-width: 220px;
  max-width: 600px;
`;
export const Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Bebas Neue";
  .list {
    color: black;
    display: grid;
    place-items: center;
    width: 20%;
    height: 80%;
    font-size: 2rem;
    a {
      ::selection {
        background-color: none;
      }
    }
    &:hover {
      color: white;
      transition-duration: 0.5s;
      transition-timing-function: ease-in;
      border: solid 0.1px;
      box-shadow: 3px 4px 2px;
      @media (max-width: 550px) {
        border: none;
        box-shadow: none;
      }
    }
  }
`;

export const Figure = styled.figure`
  width: 15%;
  max-width: 80px;
  display: grid;
  place-items: center;
  margin-left: 20px;
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;
`;
