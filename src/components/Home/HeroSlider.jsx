// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import sliderImage1 from "../../assets/slider/slider-5.jpg";
import sliderImage2 from "../../assets/slider/slider-1.jpg";
import sliderImage3 from "../../assets/slider/slider-2.jpg";
import sliderImage4 from "../../assets/slider/slider-3.jpg";
import sliderImage5 from "../../assets/slider/slider-4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// “Join us for a summer of fun and tennis!”
// “Get ready to serve up some fun this summer!”
// “Ace your game this summer with our tennis camp!”
// “Love tennis? Join us for a summer of fun on the court!”
// “Serve up some fun this summer with our tennis camp!”

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={sliderImage1}
              alt="slider 1"
              className="w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50 gap-10">
              <h1 className="text-4xl lg:text-5xl text-center text-white font-semibold">
                Join us for a summer <br className="hidden lg:block"></br> of
                fun and tennis!
              </h1>
              <Link to="/classes">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                  <span className="text-xl lg:text-2xl text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={sliderImage2}
              alt="slider 2"
              className="w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50 gap-10">
              <h1 className="text-4xl lg:text-5xl text-center text-white font-semibold">
                Get ready to serve up <br className="hidden lg:block"></br>some
                fun this summer!
              </h1>
              <Link to="/classes">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                  <span className="text-xl lg:text-2xl text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={sliderImage3}
              alt="slider 3"
              className="w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50 gap-10">
              <h1 className="text-4xl lg:text-5xl text-center text-white font-semibold">
                Ace your game this summer <br className="hidden lg:block"></br>{" "}
                with our tennis camp!
              </h1>
              <Link to="/classes">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                  <span className="text-xl lg:text-2xl text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={sliderImage4}
              alt="slider 4"
              className="w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50 gap-10">
              <h1 className="text-4xl lg:text-5xl text-center text-white font-semibold">
                Love tennis? Join us for <br className="hidden lg:block"></br> a
                summer of fun on the court!
              </h1>
              <Link to="/classes">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                  <span className="text-xl lg:text-2xl text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={sliderImage5}
              alt="slider 5"
              className="w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-50 gap-10">
              <h1 className="text-4xl lg:text-5xl text-center text-white font-semibold">
                Serve up some fun this summer{" "}
                <br className="hidden lg:block"></br> with our tennis camp!
              </h1>
              <Link to="/classes">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
                  <span className="text-xl lg:text-2xl text-white font-semibold">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
