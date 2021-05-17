import styled from "styled-components";

import Wisteria from "../../img/wisteria.jpeg";
import TransparentLogo from "../../img/logo-transparent.png";
import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";

const Footer = ({ colors, lang, data }) => {
  return (
    <>
      <SocialIcons colors={colors}>
        <h4>Follow us!</h4>
        <a href="#">
          <img src={Facebook} alt="facebook icon" />
        </a>
        <a href="#">
          {" "}
          <img src={Instagram} alt="instagram icon" />
        </a>
      </SocialIcons>
      <FooterContainer colors={colors}>
        <BackgroundImgWithOpacity></BackgroundImgWithOpacity>
        <NavigationLinks colors={colors}>
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
        <Copyright colors={colors}>
          © 2021 Wisteria website created by{" "}
          <a href="mailto:lazarmilovic@yahoo.com">LMilovic</a>
        </Copyright>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;
  background-image: linear-gradient(to right, #e4d0ee, #f4ecf8);
  opacity: 0.9;

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
    color: ${(props) => props.colors.lightBrown};
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
  margin-top: 1rem;
  border-top: 3px solid ${(props) => props.colors.lightBrown};
  text-align: center;
  background: transparent;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
`;

const SocialIcons = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${(props) => props.colors.lightBrown};
  color: black;
  text-align: center;

  h4 {
    margin-bottom: 1rem;
    font-style: oblique;
    font-size: 30px;
  }
  a {
    margin-right: 1rem;
  }
  img {
    widht: 40px;
    height: 40px;
  }
`;

const BackgroundImgWithOpacity = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url(${Wisteria});
  background-position: center;
  background-size: cover;
  opacity: 0.2;
  z-index: -1;
`;
