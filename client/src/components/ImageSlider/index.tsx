import { useState } from "react";
import data from "../../data/templates.json"; // Assuming you have the data file
import ImageCard from "../ImageCard";
import { ImageSliderProps } from "../../types";

const ImageSlider = ({ selectThumbnail, selectedImage }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const totalItems = data.length;

  const nextSlide = () => {
    if (currentIndex + visibleItems < totalItems) {
      setCurrentIndex(currentIndex + visibleItems);
    }
  };

  const prevSlide = () => {
    if (currentIndex - visibleItems >= 0) {
      setCurrentIndex(currentIndex - visibleItems);
    }
  };

  const isNextDisabled = currentIndex + visibleItems >= totalItems;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section className="relative">
      {/* <h1 className="text-2xl font-bold mb-4">Image Slider</h1> */}
      <div className="flex items-center">
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded-l ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={isPrevDisabled}
        >
          Previous
        </button>
        <div className="flex  overflow-hidden w-full">
          <div className="flex group  gap-4 transition-transform duration-500 ease-in-out">
            {data
              .slice(currentIndex, currentIndex + visibleItems)
              .map((item) => (
                <div
                  className="cursor-pointer"
                  onClick={() => selectThumbnail(item)}
                >
                  <ImageCard
                    key={item.id}
                    img={item.thumbnail}
                    id={item.id}
                    selectedImage={selectedImage}
                  />
                </div>
              ))}
          </div>
        </div>
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded-r ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextSlide}
          disabled={isNextDisabled}
        >
          <span
            style={{
              background: "url(/images/next.png) no-repeat 0 0",
            }}
            className="next"
            title="Next"
          ></span>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
