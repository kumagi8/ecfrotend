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
  return (
    <div className="carrosel-container">
      {/* {images?.map((imag, index) => (
        <img key={index} src={imag} alt={`${index} imag ${index + 1}`} />
      ))} */}

      {images && images.length > 0 && (
        <div>
          <img src={images[selectedImage]} />
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
