import styled from "styled-components";
import Slider from "react-slick";

import Frame from "../../img/wisteria-frame.jpeg";

import Kitchen from "../../img/kitchen.jpg";
import Stairs from "../../img/stairs.jpg";
import Room from "../../img/room_upstairs.jpeg";

import Arrow from "../../img/arrow.png";

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

const Gallery = ({ colors, lang }) => {
  console.log(colors);
  const photos = [Kitchen, Stairs, Room];
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
    <GalleryContainer colors={colors}>
      <h1>Gallery</h1>
      <FrameBackground background={Stairs}></FrameBackground>
      <SliderContainer colors={colors}>
        <Slider {...settings}>
          {photos.map((el, ind) => {
            return <Slide background={el} key={ind} colors={colors}></Slide>;
          })}
        </Slider>
      </SliderContainer>
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  display: block;
  margin-top: 200px;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  height: 650px;
  padding-top: 50px;
  padding-bottom: 100px;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;

  h1 {
    color: ${(props) => props.colors.lightBrown};
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;

const SliderContainer = styled.div`
  width: 80%;
  height: 100%;
  display: block;
  margin: 0 auto;
  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }

  .slick-prev:hover,
  .slick-next:hover {
    img {
      background: ${(props) => props.colors.lightBrown};
    }
  }
  .slick-prev {
    left: -2rem;
    img {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
  }
  .slick-next {
    right: -2rem;
    img {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
  }

  .slick-list,
  slick-track,
  slick-slider,
  slick-slide {
    height: 100% !important;
  }
`;

const Slide = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  height: 450px;
  z-index: -1;
  border: 3px solid ${(props) => props.colors.lightBrown};
`;

const FrameBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  opacity: 0.1;
`;
