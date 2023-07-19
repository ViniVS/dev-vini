import React, { useEffect, useState } from "react";
import * as C from "./styles";
import backgroundImage from "../../imagens/img_fundoplano1_89x1280.png";
import logo from "../../imagens/img_whiteshortversion02.png";
import logoidm from "../../imagens/img_language.svg";
import { Link } from 'react-router-dom';
import GlobalStyles from '../../styles/global.js';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Verifica se a largura é menor ou igual a 768 pixels

  return (
    <>
      <GlobalStyles />
      <C.Navbar style={{ backgroundImage: `url(${backgroundImage})` }}>
        <C.LogoWrapper>
          <C.Logo className="h-[49px] md:h-auto object-cover w-full" src={logo} alt="whiteshortversi" onClick={() => navigate("/EmConstrucao")} />
        </C.LogoWrapper>
        {!isMobile && (
          <C.NavLinksWrapper>
            <C.NavLink>
              <C.NavLinkContainer>
                Menu {/* Texto substituído por "Menu" */}
                <C.DropdownMenu>
                  <C.DropdownMenuItem href="/EmConstrucao">About us</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Yammer Brazil</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Yammer Conosur</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Yammer Mexico</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">PAB</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Lumina</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Snow</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">IAM</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Communities</C.DropdownMenuItem>
                  <div className="spacing"></div>
                  <C.DropdownMenuItem href="/EmConstrucao">Identity Net</C.DropdownMenuItem>
                </C.DropdownMenu>
              </C.NavLinkContainer>
            </C.NavLink>
            {!isMobile && (
              <>
                <C.NavLink as={Link} to="/EmConstrucao">Home</C.NavLink>
                <C.NavLink as={Link} to="/EmConstrucao">PAB</C.NavLink>
                <C.NavLink as={Link} to="/EmConstrucao">Tools</C.NavLink>
                <C.NavLink as={Link} to="/EmConstrucao">Communities</C.NavLink>
              </>
            )}
          </C.NavLinksWrapper>
        )}
        {isMobile && (
          <>
            <C.NavLinksWrapper>
              <C.NavLink>
                <C.NavLinkContainer>
                  Menu {/* Texto substituído por "Menu" */}
                  <C.DropdownMenu>
                    <C.DropdownMenuItem href="/EmConstrucao">About us</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Yammer Brazil</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Yammer Conosur</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Yammer Mexico</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">PAB</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Lumina</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Snow</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">IAM</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Communities</C.DropdownMenuItem>
                    <div className="spacing"></div>
                    <C.DropdownMenuItem href="/EmConstrucao">Identity Net</C.DropdownMenuItem>
                  </C.DropdownMenu>
                </C.NavLinkContainer>
              </C.NavLink>
                          <C.SearchBarWrapper >
              <C.SearchBar type="text" placeholder="Search" disabled />
              <C.HoverText className="hover-text">Coming soon</C.HoverText>
            </C.SearchBarWrapper>
      
            <C.LenguageWrapper>
              <C.LogoLenguage className="h-[49px] md:h-auto object-cover w-full" src={logoidm} alt="img_language" />
              <C.HoverTextLgg>en</C.HoverTextLgg>
            </C.LenguageWrapper>
            </C.NavLinksWrapper>        

          </>

        )}
        {!isMobile &&(
          <>

          <C.SearchBarWrapper >
            <C.SearchBar type="text" placeholder="Search" disabled />
            <C.HoverText className="hover-text">Coming soon</C.HoverText>
          </C.SearchBarWrapper>
    
          <C.LenguageWrapper>
            <C.LogoLenguage className="h-[49px] md:h-auto object-cover w-full" src={logoidm} alt="img_language" />
            <C.HoverTextLgg>en</C.HoverTextLgg>
          </C.LenguageWrapper>
        </>
        )}

      </C.Navbar>
    </>
  );
};

export default Navbar;
