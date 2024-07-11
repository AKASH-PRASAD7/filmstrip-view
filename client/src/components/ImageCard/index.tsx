type ImageCardProps = {
  img: string;
  id: string;
};

const ImageCard = ({ img, id }: ImageCardProps) => {
  const imagePath = `/images/thumbnails/${img}`;
  return (
    <>
      <div className="card">
        <img src={imagePath} alt={id} width="430" height="360" />
        <div className="details">
          <p>
            <strong>ID #</strong>
            {id}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
