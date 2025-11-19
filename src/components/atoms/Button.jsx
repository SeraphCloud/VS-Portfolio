import React from "react";
import "../../styles/components/Button.scss";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
