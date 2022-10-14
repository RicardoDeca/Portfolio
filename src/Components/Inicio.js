import React from "react";
import Eu from "../Assets/eu.jpg";
import InLogo from "../Assets/linkedinbwblack.png";
import Insta from "../Assets/instalogo.png";
import Email from "../Assets/emaillogo.png";
import Wpp from "../Assets/wpplogobw.png";
import Git from "../Assets/github.png";
import * as S from "../Styles/HomeStyles";
export default function Inicio() {
  return (
    <S.Section>
      <S.Div>
        <div>
          <S.H1>{"<h1>Hello, World!</h1>"}</S.H1>
          <S.H2>
            EU SOU <span>Ricardo Rodrigues Deca</span>
          </S.H2>
          <S.P>Bem-vinde ao meu Portfólio.</S.P>
        </div>
        <S.Figure>
          <img width="150px" src={Eu} alt="foto em frente ao espelho" />
        </S.Figure>
      </S.Div>
      <S.DivLogo>
        <a
          href="https://www.linkedin.com/in/ricardo-deca-b85430233/"
          target="b"
        >
          <img width="50px" src={InLogo} alt="" />
        </a>
        <a href="https://www.instagram.com/decaricardoo/" target="b">
          <img width="50px" src={Insta} alt="" />
        </a>
        <a href="mailto:ricardodeca08@gmail.com">
          <img width="50px" src={Email} alt="" />
        </a>
        <a href="https://wa.me/55982093292" target="b">
          <img width="50px" src={Wpp} alt="" />
        </a>
        <a href="https://github.com/RicardoDeca" target="b">
          <img width="50px" src={Git} alt="" />
        </a>
      </S.DivLogo>
    </S.Section>
  );
}
