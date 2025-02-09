import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  // Array of slides with content: image, heading, and paragraph
  const slides = [
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Image+1",
      heading: " MAKE MATH A SPORT",
      description:
        "This is a description for the first slide. It contains some text about the slide.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Image+2",
      heading: "REAL TIME PLAYERS",
      description:
        "This is a description for the second slide. It explains the content of the second slide.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Image+3",
      heading: "JOIN A COMMUNITY",
      description:
        "This is a description for the third slide. It gives information about the third slide.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Image+3",
      heading: "GET DATADRIVEN INSIGHTS",
      description:
        "This is a description for the fourth slide. It gives information about the fourth slide.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Image+3",
      heading: "REAL TIME RATINGS",
      description:
        "This is a description for the fifth slide. It gives information about the fifth slide.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Image */}
              <img
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Content over image */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-2">{slide.heading}</h2>
                {/* Paragraph */}
                <p className="text-center">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
