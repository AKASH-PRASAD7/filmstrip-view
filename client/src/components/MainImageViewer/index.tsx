type MainImageViewerProps = {
  img: string;
  title: string;
  description: string;
  cost: string;
  id: string;
  thumbFile: string;
  largeImgFile: string;
};

const MainImageViewer = ({
  img,
  title,
  description,
  cost,
  id,
  thumbFile,
  largeImgFile,
}: MainImageViewerProps) => {
  return (
    <div id="large">
      <div className="group">
        <img src={img} alt={title} width="430" height="360" />
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
            {thumbFile}
          </p>
          <p>
            <strong>Large Image File</strong>
            {largeImgFile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainImageViewer;
