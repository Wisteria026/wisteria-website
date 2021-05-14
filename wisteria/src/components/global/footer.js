import styled from "styled-components";

import TransparentLogo from "../../img/logo-transparent.png";

const Footer = ({ colors, lang, data }) => {
  return (
    <>
      <FooterContainer colors={colors}>
        <NavigationLinks>
          <p>Sadrzaj</p>
          <a href="#">{data[lang].home}</a>
          <a href="#">{data[lang].accomodation}</a>
          <a href="#">{data[lang].gallery}</a>
          <a href="#">{data[lang].contact}</a>
          <p>Phone: xxxxxxxxx</p>
          <p>Email: xxxxxxxxxxxxxxxx</p>
        </NavigationLinks>
        <a href="#">
          <img src={TransparentLogo} />
        </a>
        <Map>Ovde ide mapa</Map>
      </FooterContainer>
      <Copyright colors={colors}>
        © 2021 Wisteria website created by{" "}
        <a href="mailto:lazarmilovic@yahoo.com">LMilovic</a>
      </Copyright>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.colors.purple};

  p {
    font-weight: bold;
  }

  img {
    width: 150px;
    height: 70px;
    self-align: center;
    margin: 0 auto;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;

  a {
    margin-bottom: 0.75rem;
    text-decoration: none;
    text-transform: capitalize;
    color: black;
  }
  a:hover {
    color: yellow;
    text-decoration: underline;
  }
`;

const Map = styled.div`
  height: 300px;
  min-width: 300px;
  background: white;
`;

const Copyright = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border-top: 2px solid white;
  text-align: center;
  background: ${(props) => props.colors.purple};

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
`;
