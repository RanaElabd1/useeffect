import React, { useState, useEffect, useLayoutEffect } from 'react';

function UseEffect() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useLayoutEffect(() => {
    if (width > 500) {
      document.body.style.backgroundColor = 'Magenta';
    } else {
      document.body.style.backgroundColor = '	Cyan';
    }
  }, [width]);

  const updateWidth = () => {
    setWidth(window.innerWidth)
  };

  return (
    <div>
      <h1>Width: {width}px</h1>
    </div>
  );
}




export default UseEffect;