import React, { useState } from 'react';

export default function Switch({ onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevChecked) => !prevChecked);
    onToggle(); // Call the onToggle prop when the switch is toggled
  };

  return (
    <div className="switch-container1">
      <h3  style={{marginRight:"20px"}}>Monthly</h3>
      <div className={`switch ${isChecked ? 'checked' : ''}`}>
        <input
          type="checkbox"
          id="toggle-switch"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="toggle-switch" aria-hidden="true"></label>
      </div>
      <h3 style={{marginLeft:"20px"}}>Yearly</h3>
    </div>
  );
}