import React, { useContext } from "react";

import DenseTable from "../Table/index";
import { Container, Title, Screen } from "./styles";
import Header from "../Header";

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Screen>
          <Title>Lista de código penal</Title>
          <DenseTable />
        </Screen>        
      </Container>
    </>
  );
};

export default Login;
