// ImageGrid.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ImageModal from '../ImageModal/ImageModal';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 0 20%;
  box-sizing: border-box;
`;

const GridItem = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(100% - 20px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GridContainer>
        {images.slice(0, 3).map((image, index) => (
          <GridItem key={index} onClick={() => openModal(image)}>
            <Image src={image} alt={`Image ${index}`} />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        {images.slice(3, 6).map((image, index) => (
          <GridItem key={index + 3} onClick={() => openModal(image)}>
            <Image src={image} alt={`Image ${index + 3}`} />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        {images.slice(6, 9).map((image, index) => (
          <GridItem key={index + 6} onClick={() => openModal(image)}>
            <Image src={image} alt={`Image ${index + 6}`} />
          </GridItem>
        ))}
      </GridContainer>
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default ImageGrid;