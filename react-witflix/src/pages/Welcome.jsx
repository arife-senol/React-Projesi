/* eslint-disable react/prop-types */

import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  color: gray;
  padding: 0.5rem 1.5rem;
  border: 1px solid gray;
  display: inline-block;
`;

export default function Welcome(props) {
  const { setActiveProfile } = props;

  return (
    <Container>
      <h1>Who is watching?</h1>
      <Profiles setActiveProfile={setActiveProfile} />
      <br />
      <Button>Manage Profiles</Button>
    </Container>
  );
}
