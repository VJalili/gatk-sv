import React from 'react';

const FigureCaption = ({ children, number }) => {

  return (
    <div
      style={{
        padding: '0.75rem',
        textAlign: 'center',
      }}
    >
      <b>Figure {number}.</b> <i>{children}</i>
    </div>
  );
};

export default FigureCaption;
