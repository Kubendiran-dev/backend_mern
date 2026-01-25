import React, { useState } from "react";

const withToggle = (Component) => {
  return function Enhanced() {
    const [isOn, setIsOn] = useState(false);

    return (
      <Component
        isOn={isOn}
        toggle={() => setIsOn(!isOn)}
      />
    );
  };
};

export default withToggle;
