export type MainImageViewerProps = {
  title: string;
  description: string;
  cost: string;
  id: string;
  thumbnail: string;
  image: string;
};

export type ImageCardProps = {
  img: string;
  id: string;
  selectedImage: MainImageViewerProps;
};

export type ImageSliderProps = {
  selectThumbnail: (image: MainImageViewerProps) => void;
  selectedImage: MainImageViewerProps;
};
