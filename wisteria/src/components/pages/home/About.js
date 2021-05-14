import styled from "styled-components";

import Hero from "../../../img/hero.jpeg";
import Content from "../../global/content";

const About = ({ lang, data }) => {
  return (
    <AboutContainer>
      <h2>{data.title[lang]}</h2>
      <p>{data.text[lang]}</p>
      <AboutDetail>
        <SingleItem>
          <p>
            Mislio sam da ovde ide slika nekog pogleda na Dunav- kao fora
            priroda i to. I da se napiše rečenica/dve o tome kako je raj na
            zemlji, mirno, priroda bla bla bla.
          </p>
          <img src={Hero} />
        </SingleItem>
        <SingleItem>
          <img src={Hero} />
          <p>
            Ovde bih napisao koliko je blizu Smederevu i Bg/u, kapiram da je i
            to ljudima bitno. Takođe, opet dve/tri rečenice i o tome.
          </p>
        </SingleItem>
      </AboutDetail>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(Content)`
  padding: 2rem 5rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const AboutDetail = styled.div`
  margin-top: 2rem;
  display: block;
  width: 100%;
`;

const SingleItem = styled.div`
  display: flex;
  height: 400px;
  widht: 100%;
  text-align: center;
  align-items: center;

  p {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  img {
    width: 50%;
    height: 100%;
  }
`;
