import React, { useRef } from 'react';

const ProblemUseRef = () => {
  const useref = useRef(null);

  const handleFocus = () => {
    useref.current.focus();
  };

  return (
    <div>
      <input type="text" ref={useref} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default ProblemUseRef;
