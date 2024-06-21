import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import "./carrosel.css";
const Carrosel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(images?.length);
  const ImageCount = images?.length;
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
