import React from 'react';
import Magija from "../../assets/logo/logo_jabuka.webp";
const LoadingAnimation = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-wrapper">
        <div className="spinner">
        </div>
        <img src={Magija} alt="Logo" className="loading-image" />

      </div>
    </div>
  );
};

export default LoadingAnimation;
