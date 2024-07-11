type MainImageViewerProps = {
  title: string;
  description: string;
  cost: string;
  id: string;
  image: string;
  thumbnail: string;
};

const MainImageViewer = ({
  title,
  description,
  cost,
  id,
  image,
  thumbnail,
}: MainImageViewerProps) => {
  const imagePath = `/images/large/${image}`;
  return (
    <div id="large">
      <div className="group">
        <img src={imagePath} alt={title} width="430" height="360" />
        <div className="details">
          <p>
            <strong>Title</strong>
            {title}
          </p>
          <p>
            <strong>Description</strong>
            {description}
          </p>
          <p>
            <strong>Cost</strong>
            {cost}
          </p>
          <p>
            <strong>ID #</strong>
            {id}
          </p>
          <p>
            <strong>Thumbnail File</strong>
            {thumbnail}
          </p>
          <p>
            <strong>Large Image File</strong>
            {image}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainImageViewer;
