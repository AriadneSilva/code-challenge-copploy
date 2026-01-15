import { UsersData } from "../../types/users";
import { Card } from "../Card";
import { ListContainer } from "./styles";

type Props = {
  dataUser: UsersData[];
};

export function List({ dataUser }: Props) {
  return (
    <ListContainer>
      {dataUser.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ListContainer>
  );
}
