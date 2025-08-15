import React from 'react';

const RawImg = ({ image, altText, css, ...props }) => {
  const inlineStyles = css ? css : {};
  
  return (
    <img 
      src={image} 
      alt={altText || ''} 
      style={inlineStyles}
      {...props}
    />
  );
};

export default RawImg;
