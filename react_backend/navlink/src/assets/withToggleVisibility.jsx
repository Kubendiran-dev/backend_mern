import React, { useState } from "react";

const withToggleVisibility = (Component) => {
  return function Enhanced() {
    const [show, setShow] = useState(true);

    return (
      <>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

        {show && <Component />}
      </>
    );
  };
};

export default withToggleVisibility;
