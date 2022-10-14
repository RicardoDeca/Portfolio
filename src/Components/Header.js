import React from "react";
import Inicio from "./Inicio";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Onu from "./Onu";
import Logo from "../Assets/devmenu.png";
import * as S from "../Styles/HeaderStyles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
export default function Header() {
  return (
    <BrowserRouter>
      <S.Header>
        <S.Figure>
          <Link to="/">
            <S.Img src={Logo} alt="logo" />
          </Link>
        </S.Figure>
        <S.Nav>
          <S.Ul>
            <Link class="list" to="/">
              Home
            </Link>
            <Link class="list" to="/Sobre">
              About
            </Link>
            <Link class="list" to="/Projetos">
              Works
            </Link>
            <Link class="list" to="/Onu">
              Onu
            </Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Onu" element={<Onu />} />
      </Routes>
    </BrowserRouter>
  );
}
