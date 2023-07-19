import React from "react";
import RoutesApp from "./rotas";
import GlobalStyle from "./styles/global";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default App;
