import { useState } from "react";
import { UsersData } from "../../types/users";
import { CardContainer, Header, Info, Details, Label, Value } from "./styles";

type Props = {
  user: UsersData;
};

export function Card({ user }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <CardContainer>
      <Header onClick={() => setOpen(!open)} title="headerCard">
        <Info>
          <Value>{user.name}</Value>
          <Value>{user.email}</Value>
          <Value> {user.address.city}</Value>
        </Info>
        {open ? "-" : "+"}
      </Header>

      {open && (
        <Details>
          <p>
            <Label>Nome Completo:</Label> <Label>{user.name}</Label>
          </p>
          <p>
            <Label>Username:</Label> <Label>{user.username}</Label>
          </p>
          <p>
            <Label>Email:</Label> <Label>{user.email}</Label>
          </p>
          <p>
            <Label>Telefone:</Label> <Label>{user.phone}</Label>
          </p>
          <p>
            <Label>Empresa:</Label> <Label>{user.company.name}</Label>
          </p>
        </Details>
      )}
    </CardContainer>
  );
}
