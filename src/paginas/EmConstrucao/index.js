import React from "react";
import Navbar from "../../componentes/Navbar";
import * as C from "./styles";
import { useNavigate, Link } from "react-router-dom";
import background from "../../imagens/img_fundoplanofull.png";
import Imagem from "../../imagens/img_construcao.svg";
import logo from "../../imagens/viva.png";
import logo2 from "../../imagens/img_logobayerescrita.png";
import { useMediaQuery } from 'react-responsive';

const Emconstrucao = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 }); // Verifica se a largura é menor ou igual a 768 pixels

  return (
    <>
    <C.container style={{ backgroundImage: `url(${background})`}}>
      <div>
        <C.containernav>
          <Navbar/> 
        </C.containernav>    
      </div>
      
      <div>
        <C.ImageContainer>
          <C.imagem  src={Imagem} alt="Em construção"></C.imagem>
        </C.ImageContainer>
        <C.containertext>
          <C.text2>Under</C.text2>
          <C.text1>Construction</C.text1>
          <C.text3>Sorry, this page isn't ready yet</C.text3>
        </C.containertext>
      </div>
            
      <div>
        <C.containerrodape>
          
          <C.text4>
            <span>Find us on  </span>
            <a href="https://web.yammer.com/main/org/bayergroup.onmicrosoft.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMzcwNDM2NDAzMyJ9/all">Viva Engage</a>
          </C.text4>
          <C.logo src={logo} alt="descrição da imagem" />
          <C.logo2 src={logo2} alt="descrição da imagem" />
        </C.containerrodape>
      </div>
      </C.container>    
    </>
  );
};

export default Emconstrucao;
