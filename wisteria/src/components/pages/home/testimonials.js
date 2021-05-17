import styled from "styled-components";
import Content from "../../global/content";

import Arrow from "../../../img/arrow.png";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-next"}
      style={{
        ...style,
        display: "block",
        cursor: "pointer",
        transform: "rotate(180deg)",
      }}
      onClick={onClick}
    >
      <img
        src={Arrow}
        alt="right-arrow"
        height="30px"
        width="30px"
        aria-hidden="true"
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-prev"}
      style={{
        ...style,
        display: "block",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={Arrow} alt="left-arrow" height="30px" width="30px" />
    </div>
  );
};

const Testimonials = ({ lang, colors, data }) => {
  console.log(data);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <TestimonialsContainer colors={colors}>
      <SliderContainer colors={colors}>
        <Slider {...settings}>
          {/* mapping around testimonials array from data.json*/}
          {data.map((el, ind) => {
            console.log(el);
            return (
              <div className="testimonial" key={ind}>
                <FormatQuoteIcon
                  style={{
                    fill: "rgb(216,194,157)",
                    height: "5rem",
                    width: "7rem",
                    position: "absolute",
                    top: "2rem",
                    left: "3rem",
                  }}
                />
                <FormatQuoteIcon
                  style={{
                    fill: "rgb(216,194,157)",
                    height: "5rem",
                    width: "7rem",
                    position: "absolute",
                    bottom: "5rem",
                    right: "3rem",
                  }}
                />
                <p>{el.text[lang]} </p>
                <span>
                  {" "}
                  <h6>{el.name}</h6>
                </span>
              </div>
            );
          })}
        </Slider>
      </SliderContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled(Content)`
  display: block;
  position: relative;
  height: 350px;
  margin-bottom: 1rem;
  background: ${(props) => props.colors.lightGrey};
`;

const SliderContainer = styled.div`
  width: 80%;
  display: block;
  position: relative;
  margin: 0 auto;
  background: transparent;

  p:not(last-of-type) {
    font-size: 25px;
  }

  .testimonial {
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-top: 100px;
  }

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }

  h6 {
    font-size: 14px !important;
    font-weight: bold;
    position: absolute;
    right: 3rem;
    bottom: 2rem;
  }
`;
