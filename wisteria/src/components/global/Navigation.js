import { useState, useEffect } from "react";
import styled from "styled-components";
import window from "global";

import logo from "../../img/Logo-regular-transparent.png";
import Serbian from "../../img/serbian.png";
import English from "../../img/english.png";

const Navigation = ({ setLang, lang, data, colors }) => {
  const [padding, setPadding] = useState("3rem");
  const [background, setBackground] = useState("transparent");

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  console.log(Serbian);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setPadding("1.25rem");
        setBackground("rgba(250,250,250,0.5)");
      } else if (window.scrollY <= 80) {
        setPadding("3rem");
        setBackground("transparent");
      }
    });
    //return window.removeEventListener("scroll", SetEvent);
  }, []);
  return (
    <>
      {/*<Nav padding={padding} background={background} colors={colors}>
      <ul>
        <li>
          <a href="#">{data[lang].home}</a>
        </li>
        <li>
          <a href="#">{data[lang].accomodation}</a>
        </li>
        <li>
          <a href="/">
            <img className="logo" src={logo} />
          </a>
        </li>
        <li>
          <a href="#">{data[lang].gallery}</a>
        </li>
        <li>
          <a href="#">{data[lang].contact}</a>
        </li>
      </ul>
      <select value={lang} onChange={handleLangChange}>
        <option value="sr">
          🇷🇸&emsp;Srpski
        </option>
        <option value="en">
          🇬🇧&emsp;English
        </option>
      </select>
  </Nav> */}
      <AltNav padding={padding} background={background} colors={colors}>
        <a href="/">
          <img className="logo" src={logo} />
        </a>
        <NavLinks colors={colors}>
          <a href="#">{data[lang].home}</a>
          <a href="#">{data[lang].accomodation}</a>
          <a href="#">{data[lang].gallery}</a>
          <a href="#">{data[lang].contact}</a>
          <select value={lang} onChange={handleLangChange}>
            {/* <option value="sr">🇷🇸&emsp;Srpski</option>
            <option value="en">🇬🇧&emsp;English</option> */}
            <option value="sr">SR</option>
            <option value="en">EN</option>
          </select>
        </NavLinks>
      </AltNav>
    </>
  );
};

export default Navigation;

const Nav = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.padding} 0;
  background: ${(props) => props.background};
  transition: padding 0.3s;
  z-index: 100;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 70%;
    align-self: center;

    a {
      color: black;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }
    a:after {
      content: "";
      display: block;
      width: 0;
      height: 3px;
      background: ${(props) => props.colors.purple};
      transition: width 0.3s;
    }

    a:hover:after {
      width: 100%;
    }
  }

  .logo {
    width: 200px;
    height: 70px;
  }

  select {
    position: absolute;
    top: 45%;
    right: 2rem;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const AltNav = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding} 3rem;
  background: ${(props) => props.background};
  transition: padding 0.3s;
  z-index: 100;
  top: 0;

  .logo {
    width: 250px;
    height: 100px;
  }
  select {
    height: 25px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 1rem;
  }
  a:after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: ${(props) => props.colors.lightBrown};
    transition: width 0.3s;
  }

  a:hover:after {
    width: 100%;
  }
`;
