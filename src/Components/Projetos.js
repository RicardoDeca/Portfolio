import React from "react";
import lol from "../Assets/projetolol.png";
import recipes from "../Assets/recipes.png";
import flavo from "../Assets/flavo.png";
import portflow from "../Assets/portflow.png";
import * as S from "../Styles/WorksStyles.js";
export default function Projetos() {
  return (
    <S.Section>
      <S.Div>
        <S.Img src={lol} alt="" />
        <S.DivText>
          <S.H3>Detalhes do Projeto</S.H3>
          <S.P>
            Essa página de login foi feito com html css e javascript puro com
            responsividade para mobile cuja funcionalidade é o button ficar
            aparente quando a senha e o login for preenchido
          </S.P>
        </S.DivText>
      </S.Div>
      <S.Div>
        <S.Img src={recipes} alt="" />
        <S.DivText>
          <S.H3>Detalhes do Projeto</S.H3>
          <S.P>
            Página criada no final do curso inteiramente com React, página clone
            do desafio do Vai Na Web onde treinamos o trabalho em equipe com o
            git flow
          </S.P>
        </S.DivText>
      </S.Div>
      <S.boxMobile>
        <S.Img src={flavo} alt="" />
        <S.DivText>
          <S.H3>Detalhes do Projeto</S.H3>
          <S.P>
            Projeto criado para mobile com html, css e javascript com algumas
            funcionalidades como selecionar quantidade e mudar tamanho do
            produto
          </S.P>
        </S.DivText>
      </S.boxMobile>
      <S.Div>
        <S.Img src={portflow} alt="" />
        <S.DivText>
          <S.H3>Detalhes do Projeto</S.H3>
          <S.P>
            Desafio final do Módulo 1 do Vai na Web onde todo o conhecimento
            adquirido sobre html e css foi necessário para criar esse projeto
          </S.P>
        </S.DivText>
      </S.Div>
    </S.Section>
  );
}
