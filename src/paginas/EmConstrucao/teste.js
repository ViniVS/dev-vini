import styled from "styled-components";


export const imgback = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; /* Adicione essa linha para centralizar a imagem */
    position: relative;
    width: 100%;
    height: 100vh;
  }
  @media screen and (max-width: 400px) {
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; /* Adicione essa linha para centralizar a imagem */
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .intro {
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.backgroundImage});
  }

`;

export const container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  height: 200px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 12px;
    grid-column-gap: 1px;
  }
`;


export const containerimg = styled.div`
  grid-column: 2;
  justify-self: center;
  
`;
export const imagem = styled.img`
  height: 400px;
  position: relative;
  object-fit: cover;
  top: 120px;
  cursor: pointer;
  right: -30px;
  

  @media screen and (max-width: 768px) {
    justify-self: center;
    height: 250px;
    position: relative;
    object-fit: cover;
    top: 150px;
    cursor: pointer;
    right: 50px;
  }
`;
export const containertext = styled.text`
  grid-column: 1;
  display: flex;
  flex-direction: column; /* Adicionado */
  
  @media screen and (max-width: 768px) {
    justify-self: center;
    grid-column-start: 1;
    display: flex;
    justify-self: left;
  }
`
export const text1 = styled.text`
  position: absolute;
  margin-left: 20px;
  align-items: center;
  top: 350px;
  left: 40px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 95px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 500px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 500;

  }

`;

export const text2 = styled.text`
  position: absolute;
  margin-left: 20px;
  align-items: center;
  top: 250px;
  left: 40px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 95px;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 450px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 100;

  }

`;

export const containernav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const containerlogo = styled.div`
  position: relative;
`;

export const logo = styled.img`
  position: absolute;
  bottom: 0;
  left: 70px;
  top: 350px;
  height: 30px;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 60px;
    top: 500px;
    height: 30px;

  }
`;

export const logo2 = styled.img`
  position: absolute;
  bottom: 0;
  right: 70px;
  top: 350px;
  height: 30px;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 190px;
    top: 540px;
    height: 30px;

  }
`;

export const text3 = styled.text`
  position: absolute;
  margin-left: 20px;
  align-items: center;
  top: 555px;
  left: 90px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 100;
  a {
    color: white; /* Define a cor do link como branco */
    
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 700px;
    left: 80px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;
    a {
      color: white; /* Define a cor do link como branco */
      
    }
  }

`;  