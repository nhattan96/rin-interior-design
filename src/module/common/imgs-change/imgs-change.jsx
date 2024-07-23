import { useEffect, useState } from "react";

const ImgsChange = ({ images, time, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, time);

    return () => clearInterval(interval);
  }, [images.length, time]);

  return <img className={className} src={images[currentIndex]} alt="" />;
};

export default ImgsChange;
