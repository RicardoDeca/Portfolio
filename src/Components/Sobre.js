import React from "react";
import * as S from "../Styles/AboutStyles.js";
import react from "../Assets/react.png";
import css from "../Assets/csslogo.png";
import html from "../Assets/htmllogo.png";
import js from "../Assets/jslogo.png";
export default function Sobre() {
  return (
    <S.Section>
      <S.DivText>
        <S.H2>SOBRE MIM</S.H2>
        <S.P>
          <S.Span>N</S.Span>asci em uma cidade no interior do estado de São
          Paulo onde vivi por 12 anos, em 2012 me mudei para a capital do Rio de
          Janeiro morando no pé do morro do Fallet na região central do Rio, foi
          uma mudança abrupta de realidade de alguém acostumado com a vida
          pacata do interior para intensidade da cidade grande. Aqui no estado
          da guanabara tive maior contato com o público no meu primeiro emprego
          como delivery numa rede de fast-food com meus 17 anos, após um ano
          ingressei na área que atuo hoje em dia no ramo técnico automotivo.
        </S.P>
        <S.P>
          <S.Span>T</S.Span>ive contato com a área de tecnologia devido ao
          projeto social Vai Na Web que possui um polo perto da onde eu morava e
          que por diversas vezes fizeram apresentações do projeto na escola em
          que eu estudava, a princípio não me interessei pois estava focado em
          outras coisas já que naquela época estava acabando de ingressar no
          mercado de trabalho, porém nesse mesmo período um amigo começou os
          estudos nessa instituição e hoje em dia está empregado pela empresa
          mãe do Vai na Web, devido as conversas com este meu amigo ele foi me
          introduzindo ao mundo da tecnologia e acabei me interessando cada vez
          mais por este mundo, quando o projeto começou a seletiva para turma de
          2022 eu prontamente me inscrevi na tentativa de aprender algo novo.
        </S.P>
      </S.DivText>
      <S.Div>
        <S.Fieldset>
          <legend>Aprendendo</legend>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <figure>
            <figcaption>REACT</figcaption>
            <S.Img src={react} alt="" />
          </figure>
        </S.Fieldset>
      </S.Div>
    </S.Section>
  );
}
