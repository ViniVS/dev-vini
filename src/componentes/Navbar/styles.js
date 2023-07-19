import styled from "styled-components";

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 18px;
  background-repeat: no-repeat;
  position: absolute;
  color: #fff;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  width: 100%;
  border: none;

  grid-column-gap: 50px;

  @media screen and (max-width: 1126px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 12px;
    grid-column-gap: 1px;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 12px;
    grid-column-gap: 1px;
  }
`;

export const LogoWrapper = styled.div`
  grid-column: 1;
  position: relative;
  top: 2px;
  left: 10px;

  @media screen and (max-width: 1126px) {
    grid-column: 1 / span 4;
    justify-self: center;
  }
  @media screen and (max-width: 320px) {
    grid-column: 1;
    justify-self: center;
    left: -25px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  object-fit: cover;
  top: 200px;
  cursor: pointer;

  @media screen and (max-width: 1126px) {
    height: 40px;
  }
`;

export const NavLinksWrapper = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1126px) {
    grid-column-start: 1;
    position: relative;
    display: flex;
    justify-self: center;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 1126px) {
    display: none;
  }
`;

export const NavLink = styled.label`
  position: relative;
  margin-left: 20px;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  &:hover {
    color: #57871F;
  }
`;

export const NavLinkText = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background-color: gray;
  color: #fff;
  padding: 10px;
  .spacing {
    margin-bottom: 10px;
  }

  .border {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
      height: 200%;
      border: 2px solid white;
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 1126px) {
    
    grid-column-start: 1;
    position: static;
    display: block;
    margin-top: 10px;
    background-color: #E1E1E1;
    position: absolute;
    top: 100%;
    left:0;
    display: none;
    background-color: gray;
    color: #fff;
    padding: 10px;
    .spacing {
      margin-bottom: 10px;
    }
  
    .border {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200%;
        height: 200%;
        border: 2px solid white;
        box-sizing: border-box;
      }
    }
  }
`;

export const NavLinkContainer = styled.div`
  position: relative;
  &:hover ${DropdownMenu} {
    display: block;
    background-color: #E1E1E1;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 210%;
    height: 175%;
    border: 1.4px solid white;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1126px) {
    
    position: static;
    margin-top: 10px;
    &:hover ${DropdownMenu} {
      display: block;
      background-color: #E1E1E1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 210%;
      height: 100%;
      border: 1.4px solid white;
      box-sizing: border-box;
    }
  }
`;

export const DropdownMenuItemWrapper = styled.div`
  background-color: #606060;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const DropdownMenuItem = styled.a`
  display: block;
  color: #606060;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  padding-left: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background-color: #606060;
    border-radius: 4px;
  }
  &:hover {
    color: #002060;
    &::before {
      background-color: #002060;
    }
    
  }
`;

export const SearchBarWrapper = styled.div`
  grid-column: 3;
  display: inline-block;
  position: relative;
  left: 30px;

  &:hover .hover-text {
    opacity: 1;
    transform: translateY(-10px);
    background-color: #909090;
  }

  @media screen and (max-width: 1126px) {
    grid-column-start: 2;
    left: -90px;
    top: -1px;
    justify-self: left;
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    grid-column-start: 2;
    left: -10px;
    top: -1px;
    justify-self: left;
    margin-top: 10px;
  }
  @media screen and (max-width: 320px) {
    grid-column-start: 2;
    top: -1px;
    left: -40px;
    justify-self: left;
    margin-top: 10px;
  }
`;


export const SearchBar = styled.input`

  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  justify-self: end;
  font-size: 12px;
  width: 140px;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: #909090;
  }

`;

export const HoverText = styled.span`
  position: absolute;
  width: 140px;
  top: 10px;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  background-color: #909090;
  padding: 8px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
`;

export const LenguageWrapper = styled.div`
  grid-column: 4;
  display: inline-block;
  position: relative;
  justify-self: end;
  right: 60px;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1126px) {
    grid-column: 4;
    display: inline-block;
    position: relative;
    justify-self: center;
    top: 5px;
    font-family: 'Roboto', sans-serif;
  }
  @media screen and (max-width: 768px) {
    grid-column: 2;
    display: inline-block;
    position: relative;
    justify-self: start;
    right: 50px;
    font-family: 'Roboto', sans-serif;
  }
  @media screen and (max-width: 320px) {
    grid-column: 2;
    display: inline-block;
    position: relative;
    justify-self: start;
    right: 100px;
    font-family: 'Roboto', sans-serif;
  }

`;

export const LogoLenguage = styled.img`
  height: 20px;
  justify-self: end;
  object-fit: cover;
  top: 200px;
  right: 30px;
  
`;

export const HoverTextLgg = styled.span`
  position: absolute;
  left: 30px;
  font-size: 13px;
  top: 4px;
  
`;