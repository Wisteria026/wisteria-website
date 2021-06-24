import styled from "styled-components";

import HeroImg from "../../../img/hero.jpg";

const Hero = ({ colors, data, lang }) => {
  return (
    <HeroContainer background={HeroImg} colors={colors}>
      <h1>{data.heading[lang]}</h1>
      <button
        onClick={() => {
          alert("ovo dugme vodi ka booking-u");
        }}
      >
        {data.button[lang]}
      </button>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
  margin-top: 150px;

  h1 {
    margin-bottom: 1rem;
    font-size: 30px;
  }

  button {
    padding: 1rem 5rem;
    font-size: 18px;
    font-weight: bold;
    border: 3px solid black;
    background: transparent;
  }

  button:hover {
    background: rgba(250, 250, 250, 0.8);
    font-weight: bold;
    border-color: white;
  }
`;
