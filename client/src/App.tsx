import { useState } from "react";
import "./App.css";
import MainImageViewer from "./components/MainImageViewer";
import ImageSlider from "./components/ImageSlider";
import { MainImageViewerProps } from "./types";

const defaultOption = {
  title: "Business Site Template - 7112",
  cost: "55.00",
  id: "7112",
  description:
    "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
  thumbnail: "7112-m.jpg",
  image: "7112-b.jpg",
};

function App() {
  const [selectedImage, setSelectedImage] = useState<MainImageViewerProps>({
    ...defaultOption,
  });
  return (
    <>
      <main>
        <header>Filmstrip View</header>
        <MainImageViewer
          title={selectedImage?.title}
          description={selectedImage?.description}
          cost={selectedImage?.cost}
          id={selectedImage?.id}
          thumbnail={selectedImage?.thumbnail}
          image={selectedImage?.image}
        />
        <ImageSlider
          selectThumbnail={setSelectedImage}
          selectedImage={selectedImage}
        />
      </main>
    </>
  );
}

export default App;
