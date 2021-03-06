import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Frase from "./componens/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  const [frase, setfrase] = useState({});

  const consultar = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const frase = await api.json();
    setfrase(frase[0]);
  };

  useEffect(() => {
    consultar();
  }, []);
  return (
    <Contenedor>
      <Frase frase={frase} />

      <Boton onClick={consultar}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
