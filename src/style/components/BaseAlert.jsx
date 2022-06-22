import React from "react";
import { MdError } from "react-icons/md";

const BaseAlert = ({ children, className, alertType }) => {
  return (
    <div className={className} aria-label={alertType}>
      <div className="message">
        <MdError size={21} />
        <p>{children}</p>
      </div>
      <div className="progressBar">
        <span></span>
      </div>
    </div>
  );
};

export default BaseAlert;
