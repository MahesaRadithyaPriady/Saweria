import React from "react";
const Card = ({ children }) => {
  return (
    <>
      <div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
