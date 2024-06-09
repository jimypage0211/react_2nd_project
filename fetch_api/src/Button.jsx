import React from "react";

const Button = ({ buttonText, requestType, setRequestType }) => {
  return (
    <>
      <button
        className={buttonText === requestType ? "selected" : null}
        onClick={() => setRequestType(buttonText)}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
