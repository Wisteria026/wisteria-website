import styled from "styled-components";

import About from "./About";
import Hero from "./hero";
import Testimonials from "./testimonials";

const Home = ({ lang, data, colors }) => {
  return (
    <>
      <Hero colors={colors} data={data.hero} lang={lang} />
      <About lang={lang} data={data.about} colors={colors} />
      <Testimonials lang={lang} colors={colors} data={data.testimonials} />
    </>
  );
};

export default Home;
