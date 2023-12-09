import { useEffect, useState } from "react";
import { ADVICE_URL } from "../utils/constants";
import image3 from "../images/icons-change.png";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceIndex, setAdviceIndex] = useState(0);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, [adviceIndex]);

  const handleImageClick = () => {
    setAdviceIndex((prevIndex) => (prevIndex + 1) % advice.length);
  };

  const fetchData = async () => {
    const data = await fetch(ADVICE_URL + "advice");
    const json = await data.json();
    setAdvice(json.slip.advice);
  };

  return (  
    <div className="quotes">
      <h1>Quote #{adviceIndex + 1}</h1>
      <h3>" {advice} "</h3>

      <img src={image3} alt="change logo" onClick={handleImageClick} />
    </div>
  );
};
export default Advice;
