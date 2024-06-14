/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  max-width: 300px;
  cursor: pointer;
  color: gray;

  &:hover {
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  text-align: center;
`;

export default function Profile(props) {
  const { profile, setActiveProfile } = props;

  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandler = () => {
  //aktif profili setle ve home'a yönlendir
    setActiveProfile(profile);

    history.push("/home");
  };

  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}
