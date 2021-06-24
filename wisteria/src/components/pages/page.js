import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "../global/Navigation";
import Footer from "../global/footer";
import Home from "./home/home";
import Accommodation from "./accommodation";
import Gallery from "./gallery";
import Contact from "./contact";

import Data from "../../data.json";

const Page = ({ lang, colors, setLang }) => {
  return (
    <>
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
          <Route path="/gallery">
            <Gallery lang={lang} colors={colors} />
          </Route>
          <Route path="/contact">
            <Contact lang={lang} colors={colors} />
          </Route>
          <Route path="/">
            <Home data={Data.homepage} lang={lang} colors={colors} />
          </Route>
        </Switch>
      </Router>
      <Footer lang={lang} colors={colors} data={Data.navigation} />
    </>
  );
};

export default Page;
