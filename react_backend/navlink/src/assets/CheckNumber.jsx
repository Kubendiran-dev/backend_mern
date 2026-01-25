import { useState } from "react";

const CheckNumber = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h3>
        {num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"}
      </h3>
    </>
  );
};

export default CheckNumber;
