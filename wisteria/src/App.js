import { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navigation from "./components/global/Navigation";
import Hero from "./components/pages/home/hero";
import About from "./components/pages/home/About";
import Testimonials from "./components/pages/home/testimonials";
import Footer from "./components/global/footer";

import Data from "./data.json";

function App() {
  const [lang, setLang] = useState("sr");
  const colors = {
    purple: "#f4ecf8",
    lightBrown: "rgb(216,194,157)",
    lightGrey: "rgb(243, 243, 243)",
  };

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
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
      <About lang={lang} data={Data.homepage.about} colors={colors} />
      <Testimonials
        lang={lang}
        colors={colors}
        data={Data.homepage.testimonials}
      />
      <Footer lang={lang} colors={colors} data={Data.navigation} />
    </>
  );
}

export default App;
