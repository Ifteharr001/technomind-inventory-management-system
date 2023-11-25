// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fdbpBqH/pexels-pixabay-158826.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-3">
            {/* hero content */}
            <div className="col-span-2">
              <p className="text-[#fff] font-bold">
                ---- Buy Smart Products ----
              </p>
              <h2 className="text-7xl font-bold">
                Smart <span className="text-[#f31312]">Products</span> <br />{" "}
                For Your Life
              </h2>
              <p className="mt-4 text-[#fff] font-bold">
                ---- Sell Your Own Products ----
              </p>
              <div className="mt-8">
                <button className="btn rounded-none text-white bg-[#f31312] border-none">
                  Create Shop
                </button>
              </div>
            </div>
            {/* hero slider */}
            <div className="col-span-1">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
