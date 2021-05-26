import styled from "styled-components";

import AccommodationHeroImg from "../../img/accommodation.jpg";

import Bathroom from "../../img/bathroom.jpg";
import Room from "../../img/room.jpg";
import Kitchen from "../../img/kitchen.jpg";

import Content from "../global/content";

const Accommodation = ({ lang, data, colors }) => {
  return (
    <>
      <AccommodationHero background={AccommodationHeroImg}></AccommodationHero>
      <AccommodationContainer colors={colors}>
        <h1>Idealna prilika za izlet na Dunavu</h1>
        <p>
          Naša villa Wisteria se prostire na xxx metara kvadratnih sa xxx
          dvorišta i predstavlja sjajno mesto za beg u prirodu. Na samo 30
          minuta od Beograda, imate priliku da uživate...
        </p>
        <SingleItem>
          <BackgroundImage background={Kitchen}></BackgroundImage>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </SingleItem>
        <SingleItem>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <BackgroundImage background={Bathroom}></BackgroundImage>
        </SingleItem>
        <SingleItem>
          <BackgroundImage background={Room}></BackgroundImage>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </SingleItem>
        <ButtonContainer>
          <p>Za vise slika pogledajte galeriju</p>
          <button>Vidi Galeriju</button>
        </ButtonContainer>
      </AccommodationContainer>
    </>
  );
};

export default Accommodation;

const AccommodationHero = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
`;

const AccommodationContainer = styled(Content)`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.colors.lightBrown};
  }

  p {
    margin-botom: 2rem;
  }

  button {
    padding: 1rem 5rem;
    font-size: 18px;
    font-weight: bold;
    border: 3px solid rgb(216, 194, 157);
    background: transparent;
    cursor: pointer;
    position: relative;
    color: rgb(216, 194, 157);
  }

  button:hover {
    border: 3px solid rgb(216, 194, 157);
    color: black;
    background: white;
  }
`;

const SingleItem = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  margin-top: 3rem;
  position: relative;
  overflow: visible;

  .text {
    width: 50%;
    background: rgba(216, 194, 157, 0.5);
    color: black;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;

    p {
      line-height: 1.6;
    }
  }

  &:nth-of-type(2) {
    justify-content: flex-end;
  }
  &:nth-of-type(3) {
    margin-bottom: 3rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

const Text = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const ButtonContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4)
  );
  color: rgb(216, 194, 157);
`;
