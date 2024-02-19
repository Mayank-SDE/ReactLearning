import React, { useEffect, useState } from 'react';

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => {
        return prevState - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
