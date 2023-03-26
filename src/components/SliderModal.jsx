import Slider from "react-slick";
import "./styles/SliderModal.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const range = (start, end) => {
  let output = [];
  for (let i = parseInt(start); i <= parseInt(end); i += 1) {
    output.push(i);
  }
  return output;
};

const SliderModal = ({ number, start, end }) => {

    const settings = {
        dots: true,
        lazyLoad: true
    }

    console.log([number, start, end])

    const renderSlides = () => (
        range(start, end).map(num => (
            <div>
                <img src={`/presentations/${number}/${num}.jpg`} />
            </div>
        )));

    return (
        <div className="sliderModal">
            <Slider {...settings} >{renderSlides()}</Slider>
        </div>
    );
}

export default SliderModal;