import React, { useEffect, useState } from "react";
import * as Icons from "react-bootstrap-icons";
import "./carrosel.css";
const Carrosel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const ImageCount = images?.length;
  //   useEffect(() => {
  //     setInterval(() => {
  //       setSelectedImage(selectedImage % images.length);
  //     }, 5000);
  //   }, [setSelectedImage]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevSelected) => (prevSelected + 1) % ImageCount);
    }, 3000); // Change image every 3 seconds (adjust this interval as needed)

    return () => {
      clearInterval(interval); // Cleanup function to clear the interval
    };
  }, [ImageCount]);
  return (
    <div className="carrosel-container">
      {images && images.length > 0 && (
        <div>
          <img key={selectedImage + "io"} src={images[selectedImage]} />
          <div className="navigator">
            {images.map((imag, i) =>
              selectedImage === i ? (
                <Icons.CircleFill className="dot fill" />
              ) : (
                <Icons.Circle
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className="dot"
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrosel;
