import React, { useState } from "react";

const WithCounter = (OldComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <OldComponent
        {...props}
        count={count}
        incrementcount={() => {
          setCount(count + 1);
        }}
      />
    );
  };
};

export default WithCounter;

//const NewComponent =withCounter(OldComponent)
//<NewComponent/>
