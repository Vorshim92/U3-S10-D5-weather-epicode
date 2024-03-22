import React from "react";

const PhoneMockup = ({ children }) => {
  return (
    <div className="device device-iphone-14">
      <div className="device-frame">
        <div style={{ overflow: "hidden", borderRadius: "30px" }}>{children}</div>
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
    </div>
  );
};
export default PhoneMockup;
