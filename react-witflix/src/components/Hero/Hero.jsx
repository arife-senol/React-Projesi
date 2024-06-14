import styled from "styled-components";
import video from "../../assets/movies/queen_of_tears.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";

const Player = styled.video`
  position: absolute;
  z-index: -1;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const PromotedVideoSection = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 1.5rem;
  width: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
`;

const WhiteButton = styled(Button)`
  background: white;
  color: black;
`;

const GrayButton = styled(Button)`
  background: Gray;
`;

const DarkArea = styled.div`
  height: 10vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8169642857142857) 30%,
    rgba(0, 0, 0, 0.500437675070028) 71%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export default function Hero() {
  return (
    <PromotedVideoSection>
      <Header />
      <Player autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </Player>
      <Details>
        <Title>Queen of Tears</Title>
        <Description>
          The queen of department stores and the prince of supermarkets weather
          a marital crisis —until love miraculously begins to bloom again.
        </Description>
        <ButtonContainer>
          <WhiteButton>
            <FontAwesomeIcon icon={faPlay} /> Play
          </WhiteButton>
          <GrayButton>
            {" "}
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </GrayButton>
        </ButtonContainer>
      </Details>
      <DarkArea></DarkArea>
    </PromotedVideoSection>
  );
}