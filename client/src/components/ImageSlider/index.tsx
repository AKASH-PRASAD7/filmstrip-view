import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../ImageCard";
import { ImageSliderProps, MainImageViewerProps } from "../../types";
import Loader from "../Loader";

const ImageSlider = ({ selectThumbnail, selectedImage }: ImageSliderProps) => {
  const [data, setData] = useState<MainImageViewerProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const totalItems = data?.length;

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

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get("http://localhost:8000/api/film");
      setData(response.data.films);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="relative">
      {/* <h1 className="text-2xl font-bold mb-4">Image Slider</h1> */}
      <div className="flex items-center justify-center thumbnails ">
        <button
          className={` ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={isPrevDisabled}
        >
          <img src="/images/previous.png" alt="left" />
        </button>
        <div className="flex  overflow-hidden ">
          <div className="flex group  gap-4 transition-transform duration-500 ease-in-out">
            {loading ? (
              <div className="flex justify-center items-center h-40  ">
                <Loader />
              </div>
            ) : error ? (
              <p className="text-red-500 text-xl text-center">
                Error fetching data
              </p>
            ) : (
              data &&
              data
                .slice(currentIndex, currentIndex + visibleItems)
                .map((item) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => selectThumbnail(item)}
                    key={item.id}
                  >
                    <ImageCard
                      key={item.id}
                      img={item.thumbnail}
                      id={item.id}
                      selectedImage={selectedImage}
                    />
                  </div>
                ))
            )}
          </div>
        </div>
        <button
          className={` ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextSlide}
          disabled={isNextDisabled}
        >
          <img src="/images/next.png" alt="right" />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
