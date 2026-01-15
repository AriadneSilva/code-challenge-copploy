import React, { useEffect } from "react";
import { List } from "../../components/List";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { Container } from "./styles";

import { useUsers } from "../../hooks/useUsers";
export const Home = () => {
  const { dataUser, getDataUsers, isLoading } = useUsers();

  useEffect(() => {
    getDataUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <LoadingOverlay visible fixed>
      <span>Carregando...</span>
    </LoadingOverlay>
  ) : (
    <Container>
      {dataUser.length === 0 ? "Lista Vazia" : <List dataUser={dataUser} />}
    </Container>
  );
};
