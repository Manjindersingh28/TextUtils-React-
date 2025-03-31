import React from "react";

function Alert(props) {
  const capitalised = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {/* Conditional rendering */}

      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalised(props.alert.type)}:<strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
