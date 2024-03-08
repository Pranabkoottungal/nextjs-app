"use client";

import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner1.jpg",
            title: "Trending Services",
            mainTitle: "Driving Change Through Technology",
        },
        {
            id: 1,
            img: "/banner2.jpg",
            title: "Trending Services",
            mainTitle: "Driving Change Through Technology",
        },
        {
            id: 2,
            img: "/banner4.jpg",
            title: "Trending Services",
            mainTitle: "Solutions That Matter",
        },
    ]
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                    key ={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero;