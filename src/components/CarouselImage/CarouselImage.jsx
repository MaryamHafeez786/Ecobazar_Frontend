import React, { useState } from "react";
import BgCarousel from "../../assets/BG.svg";
import { MdHeight } from "react-icons/md";
const images = [
  "/src/assets/BG.svg",
  "/src/assets/Bannar.svg",
  "/src/assets/Bannar1.svg",
  "/src/assets/Bannar2.svg",
  "/src/assets/Bannar3.svg",
];

const CarouselImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full "
      data-carousel="slide"
    >
      <div
        className="relative overflow-hidden rounded-lg  md:h-96 "
        style={{ height: "640px" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute block w-full duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translate(-50%, -50%)`,
              top: "50%",
              left: "50%",
            }}
          >
            <img
              src={src}
              className="block w-full h-[60%]"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center  justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselImage;
