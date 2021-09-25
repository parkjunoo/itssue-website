
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainPage() {

  const dotDiv = styled.div`
  top: 0px;
`


  var settings = {
    customPaging: function (i) {
      return (
        <dotDiv>
          커스텀
        </dotDiv>
      );
    },
    dots: true,
    infinite: true,
    dotsClass: '',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
