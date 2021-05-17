import styled from "styled-components";

import View from "../../../img/the_view.jpg";
import Belgrade from "../../../img/belgrade.jpeg";
import Content from "../../global/content";

const About = ({ lang, data, colors }) => {
  return (
    <AboutContainer>
      <h2>{data.title[lang]}</h2>
      <p>{data.text[lang]}</p>
      <AboutDetail>
        <SingleItem>
          <SingleItemText colors={colors}>
            <h3>Raj u prirodi</h3>
            <p>
              Mislio sam da ovde ide slika nekog pogleda na Dunav- kao fora
              priroda i to. I da se napiše rečenica/dve o tome kako je raj na
              zemlji, mirno, priroda bla bla bla.
            </p>
          </SingleItemText>
          <img src={View} />
        </SingleItem>
        <SingleItem>
          <img src={Belgrade} />
          <SingleItemText colors={colors}>
            <h3>Na samo pola sata od Beograda</h3>
            <p>
              Ovde bih napisao koliko je blizu Smederevu i Bg/u, kapiram da je i
              to ljudima bitno. Takođe, opet dve/tri rečenice i o tome.
            </p>
            <p>
              Ovde bih napisao koliko je blizu Smederevu i Bg/u, kapiram da je i
              to ljudima bitno. Takođe, opet dve/tri rečenice i o tome.
            </p>
          </SingleItemText>
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

  img {
    width: 50%;
    height: 100%;
  }
`;

const SingleItemText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 25px;
    color: ${(props) => props.colors.lightBrown};
  }

  p {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
