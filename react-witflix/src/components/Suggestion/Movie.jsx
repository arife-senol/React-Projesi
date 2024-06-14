/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.img`
  width: 16%;
`;

export default function Movie(props) {
  const { movie } = props;

  return <Card src={movie.poster_path} />;
}

