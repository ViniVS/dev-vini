import styled from "styled-components";



export const container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 100vh;
  border: none;
  background-image: url(${props => props.backgroundImage});

  background-size: cover;
  background-position: center center; /* Adicione essa linha para centralizar a imagem */
  position: absolute;



  @media screen and (max-width: 1126px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 12px;
    grid-column-gap: 1px;
    display: grid;
    width: 100%;
    height: 100vh;
    border: none;
    background-image: url(${props => props.backgroundImage});
    grid-auto-rows: 800px;
  }

  @media screen and (max-width: 552px) {
    padding: 12px;
    grid-column-gap: 1px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    height: 100vh;
    border: none;
    background-image: url(${props => props.backgroundImage});
  }

`;



export const containernav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;


export const containerrodape = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const logo = styled.img`
  position: absolute;
  grid-column-start: 1;
  bottom: 0;
  left: 5%;
  height: 30px;
  top: calc(100% - 50px - 10px); /* Exemplo de cálculo da altura com base na porcentagem */
`;

export const logo2 = styled.img`
  position: absolute;
  grid-column-start: 2;
  bottom: 0;
  right: 10%;
  height: 35px;
  top: calc(100% - 50px - 10px); /* Exemplo de cálculo da altura com base na porcentagem */

  @media screen and (max-width: 350px) {
    grid-column-start: 2;
    justify-self: center;
    position: absolute;
    bottom: 0;
    right: 5%;
    top: -58px;
    height: 35px;
  }
  
`;

export const ImageContainer = styled.div`
  position: absolute;
  grid-column-start: 3;
  top: -1%;
  right: 10%;
  width: 50%; /* Ajuste a largura conforme necessário */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    grid-column-start: 3;
    top: -1%;
    right: 10%;
    width: 60%; /* Ajuste a largura conforme necessário */
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media only screen and (max-width: 1279px) {
    position: absolute;
    grid-column-start: 3;
    top: -1%;
    right: 10%;
    width: 50%; /* Ajuste a largura conforme necessário */
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    grid-column-start: 3;
    top: -10%;
    right: 10%;
    width: 100%; /* Ajuste a largura conforme necessário */
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const imagem = styled.img`
width: 100%;
height: auto;
object-fit: contain;

@media only screen and (min-width: 1280px) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 768px) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 1279px) {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  top: 550px;
  left: 40px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 95px;
  font-weight: 500;
  @media only screen and (min-width: 1280px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 390px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 150px;
    font-weight: 500;
  }

  @media only screen and (max-width: 1279px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 390px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 100px;
    font-weight: 500;

  }

  @media screen and (max-width: 768px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 500px;
    left: 4px;
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

  @media only screen and (min-width: 1280px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 230px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 150px;
    font-weight: 100;
  }

  @media only screen and (max-width: 1279px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 280px;
    left: 40px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 100px;
    font-weight: 100;

  }

  @media screen and (max-width: 768px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 450px;
    left: 4px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 100;

  }
  `;

  export const text3 = styled.text`
  position: absolute;
  margin-left: 20px;
  align-items: center;
  top: 250px;
  left: 40px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;

  font-size: 95px;


  @media only screen and (min-width: 1280px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 600px;
    left: 100px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: 100;
  }

  @media only screen and (max-width: 1279px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 550px;
    left: 80px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 100;

  }

  @media screen and (max-width: 768px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: 570px;
    left: 20px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;

  }
  `;

  
  export const text4 = styled.text`
  position: absolute;
  margin-left: 20px;
  align-items: center;
  top: 250px;
  left: 40px;
  list-style-type: none;
  cursor: disabled;
  color: white;
  text-decoration: none;
  a {
    color: white;
  }
  font-size: 95px;


  @media only screen and (min-width: 1280px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: -55px;
    left: 150px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;
  }

  @media only screen and (max-width: 1279px) {
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: -55px;
    left: 100px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;

  }

  @media screen and (max-width: 768px) {
    
    position: absolute;
    margin-left: 20px;
    align-items: center;
    top: -55px;
    left: 60px;
    list-style-type: none;
    cursor: disabled;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 100;

  }
  `;


