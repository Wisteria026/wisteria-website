import { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";

import Navigation from "./components/global/Navigation";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/home/About";
import Footer from "./components/global/footer";

import Data from "./data.json";

function App() {
  const [lang, setLang] = useState("sr");

  const colors = {
    purple: "rgb(139,111,170)",
  };

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            overflow-x: hidden;
          }
          p {
            margin-bottom: 1rem;
          }
        `}
      />

      <Navigation
        setLang={setLang}
        lang={lang}
        data={Data.navigation}
        colors={colors}
      />
      <Hero colors={colors} data={Data.homepage.hero} lang={lang} />
      <About lang={lang} data={Data.homepage.about} />
      <Footer lang={lang} colors={colors} data={Data.navigation} />
      {/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  </div> */}
    </>
  );
}

export default App;
