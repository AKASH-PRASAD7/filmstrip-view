import { ImageCardProps } from "../../types";

const ImageCard = ({ img, id, selectedImage }: ImageCardProps) => {
  const imagePath = `/images/thumbnails/${img}`;
  return (
    <>
      <div
        className={`card ${
          selectedImage.id === id
            ? "border-4 border-red-700 rounded-lg p-2"
            : ""
        }`}
      >
        <img
          className="object-cover "
          src={imagePath}
          alt={id}
          width="430"
          height="360"
        />
        <div>
          <div className="flex justify-center items-center">
            <p
              className={` w-14  ${
                selectedImage.id === id
                  ? "bg-red-700 text-white p-1 rounded-xl "
                  : ""
              }`}
            >
              {id}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
