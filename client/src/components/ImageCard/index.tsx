import { ImageCardProps } from "../../types";

const ImageCard = ({ img, id, selectedImage }: ImageCardProps) => {
  const imagePath = `/images/thumbnails/${img}`;
  return (
    <>
      <div className={`group`}>
        <div
          className={`${
            selectedImage.id === id
              ? "border-4 border-red-800 rounded-lg p-2"
              : ""
          }`}
        >
          <img
            className="object-cover "
            src={imagePath}
            alt={id}
            width="145"
            height="121"
          />
        </div>
        <div>
          <div className="flex mt-2 justify-center items-center">
            <p
              className={` w-14  ${
                selectedImage.id === id
                  ? "bg-red-800 text-white px-1 rounded-xl "
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
