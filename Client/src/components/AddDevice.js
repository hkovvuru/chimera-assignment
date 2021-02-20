import React from "react";

export const AddDevice = ({ addDeviceData, setFields }) => {
  return (
    <form onSubmit={addDeviceData}>
      <div className="form">
        <label forHtml="device">Device:</label>
        <input type="text" name="device" onChange={e => setFields(e)} />
        <label forHtml="device">OS:</label>
        <input type="text" name="os" onChange={e => setFields(e)} />
        <label forHtml="device">manufacturer:</label>
        <input type="text" name="manufacturer" onChange={e => setFields(e)} />
        <button type="submit">Add Device</button>
      </div>
    </form>
  );
};
