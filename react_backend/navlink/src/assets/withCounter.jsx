import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <WrappedComponent
        count={count}
        increment={() => setCount(count + 1)}
        {...props}
      />
    );
  };
};

export default withCounter;
