import { useEffect } from "react";
import { useState } from "react";

const Time = () => {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <p>
        this is the current time:{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
export default Time;
