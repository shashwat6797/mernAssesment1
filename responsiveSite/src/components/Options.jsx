import { useState } from "react";
import options from "../../public/options.png";

function Options() {
  const [isHoverd, setIsHoverd] = useState(false);
  const buttonStyle = {
    height: "28px",
    width: "28px",
    background: isHoverd ? "#ADB5BD" : "#fff",
    color: "#000",
    borderRadius: "4px",
    cursor: "pointer",
  };
  const handleMouseEnter = () => {
    setIsHoverd(true);
  };
  const handleMouseLeave = () => {
    setIsHoverd(false);
  };
  return (
    <div
      className="d-flex position-relative flex-column align-items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={buttonStyle}
        className="d-flex jutify-content-center align-items-center"
      >
        <img
          src={options}
          alt=""
          style={{
            width: "26px",
            objectFit: "contain",
          }}
        />
      </div>
      {isHoverd ? (
        <div
          style={{
            width: "160px",
            zIndex: "10",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            background: "#fff",
            borderRadius: "4px",
            padding: "12px",
            cursor: "pointer",
            fontSize: "14px",
            position: "absolute",
            top: "26px",
          }}
        >
          <div className="p-1">Edit</div>
          <div className="p-1">Report</div>
          <div className="p-1">Option3</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Options;
