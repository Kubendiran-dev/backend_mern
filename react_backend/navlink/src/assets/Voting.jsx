import { useState } from "react";

const Voting = () => {
  const [age, setAge] = useState(0);

  return (
    <>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <h3>{age >= 18 ? "Eligible" : "Not Eligible"}</h3>
    </>
  );
};

export default Voting 