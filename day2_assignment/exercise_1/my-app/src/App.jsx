import React, { useRef } from "react";

const AutoFocusInputs = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleChange = (e, nextRef) => {
    if (e.target.value.length >= 4 && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  const handleKeyDown = (e, prevRef) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && prevRef?.current) {
      prevRef.current.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        maxLength={4}
        ref={input1Ref}
        onChange={(e) => handleChange(e, input2Ref)}
        onKeyDown={(e) => handleKeyDown(e, null)}
        placeholder="Input 1"
      />
      <input
        type="text"
        maxLength={4}
        ref={input2Ref}
        onChange={(e) => handleChange(e, input3Ref)}
        onKeyDown={(e) => handleKeyDown(e, input1Ref)}
        placeholder="Input 2"
      />
      <input
        type="text"
        maxLength={4}
        ref={input3Ref}
        onChange={(e) => handleChange(e, null)}
        onKeyDown={(e) => handleKeyDown(e, input2Ref)}
        placeholder="Input 3"
      />
    </div>
  );
};

export default AutoFocusInputs;