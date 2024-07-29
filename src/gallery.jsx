import React, { useState, useEffect } from 'react';
import './App.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSliderVisible) {
        if (e.key === 'ArrowLeft') {
          showPreviousImage();
        } else if (e.key === 'ArrowRight') {
          showNextImage();
        } else if (e.key === 'Escape') {
          setIsSliderVisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSliderVisible]);

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipe = (touchStartX, touchEndX) => {
    if (touchStartX - touchEndX > 50) {
      showNextImage();
    } else if (touchEndX - touchStartX > 50) {
      showPreviousImage();
    }
  };

  return (
    <div>
      <div className="image-grid">
        {images.slice(0, 5).map((img, index) => (
          <div className={`image-item ${index === 0 ? 'main-image' : ''}`} key={index}>
            <img src={`http://localhost:3002/${img}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
        <button className="show-all" onClick={() => setIsSliderVisible(true)}>Show all photos</button>
      </div>

      {isSliderVisible && (
        <div className="img-slider-container" style={{ display: isSliderVisible ? 'block' : 'none' }}>
          <div
            id="imageSlider"
            className="image-slider"
            onTouchStart={(e) => (this.touchStartX = e.changedTouches[0].screenX)}
            onTouchEnd={(e) => handleSwipe(this.touchStartX, e.changedTouches[0].screenX)}
          >
            <div className="slider-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:3002/${img}`}
                  alt={`Image ${index + 1}`}
                  className={index === currentIndex ? 'active' : ''}
                />
              ))}
            </div>
            <button className="img-slider-nav-button prev" onClick={showPreviousImage}>&lt;</button>
            <button className="img-slider-nav-button next" onClick={showNextImage}>&gt;</button>
            <div className="close-button" onClick={() => setIsSliderVisible(false)}>&times;</div>
            <div className="slide-counter">{currentIndex + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
