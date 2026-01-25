import { useState } from "react";

const Object = () => {

  const [user, setUser] = useState({
    name: "kuben",
    age: 21
  });

  const toggleAge = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age === 21 ? 22 : 21
    }));
  };

  return (
    <>
      <p>{user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={toggleAge}>
        Toggle Age
      </button>
    </>
  );
};

export default Object;
