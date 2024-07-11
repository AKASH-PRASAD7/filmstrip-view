import { useState } from "react";
import data from "../../data/templates.json";
import ImageCard from "../ImageCard";

const ImageSlider = () => {
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

  return (
    <section className="relative">
      <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
      <div className="flex items-center">
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded-l ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / visibleItems) * 100}%)`,
            }}
          >
            {data
              .slice(currentIndex, currentIndex + visibleItems)
              .map((item) => (
                <ImageCard key={item.id} img={item.thumbnail} id={item.id} />
              ))}
          </div>
        </div>
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded-r ${
            currentIndex + visibleItems >= totalItems
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex + visibleItems >= totalItems}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
