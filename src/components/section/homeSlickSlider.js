import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/SlickSlider.css';
import expert1 from '../../assets/images/expert1.png';
import expert2 from '../../assets/images/expert2.png';
import expert3 from '../../assets/images/expert3.png';
import expert4 from '../../assets/images/expert4.png';
export default class HomeSlick extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="experts-container">
        <h2> Expert Doctors </h2>
        <Slider {...settings}>
          <div className="img-customize">
            <img src={expert1} alt="expert1"></img>
            <div className="expert-info text-center p-2">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert2} alt="expert2"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert3} alt="expert3"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert4} alt="expert4"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert1} alt="expert5"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert2} alt="expert6"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert3} alt="expert7"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
          <div className="img-customize">
          <img src={expert4} alt="expert8"></img>
          <div className="expert-info text-center p-3">
                <h2>Mirazul Alom</h2>
                <p>Nuerologist</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}