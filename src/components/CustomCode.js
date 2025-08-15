import React from 'react';

const CustomCode = ({ innerHTML, css, ...props }) => {
  const inlineStyles = css ? css : {};
  
  return (
    <div 
      style={inlineStyles}
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      {...props}
    />
  );
};

export default CustomCode;
