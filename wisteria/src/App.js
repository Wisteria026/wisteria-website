import { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./components/pages/home/home";
import Navigation from "./components/global/Navigation";
import Footer from "./components/global/footer";

import Data from "./data.json";
import Accommodation from "./components/pages/accommodation";

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
          *::before,
          *::after {
            box-sizing: border-box;
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
      <Router>
        <Switch>
          <Route path="/accommodation">
            <Accommodation
              data={Data.accommodation}
              lang={lang}
              colors={colors}
            />
          </Route>
          <Route path="/">
            <Home data={Data.homepage} lang={lang} colors={colors} />
          </Route>
        </Switch>
      </Router>
      <Footer lang={lang} colors={colors} data={Data.navigation} />
    </>
  );
}

export default App;
