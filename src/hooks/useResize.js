import React, { Suspense, useLayoutEffect, useState, useCallback } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const useHeightNavbar = () => {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    const heightNav = document.getElementById('navBar').offsetHeight;
    function updateSize() {
      setHeight(heightNav);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return height;
};

// const heightNavbar = document.getElementById('navBar').offsetHeight;
// console.log(heightNavbar);

export { useWindowSize, useHeightNavbar };
