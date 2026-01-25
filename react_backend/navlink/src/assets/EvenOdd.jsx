import { useState } from "react";

const EvenOdd = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h3>{num % 2 === 0 ? "Even" : "Odd"}</h3>
    </>
  );
};

export default EvenOdd;
