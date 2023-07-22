import React from 'react';
import { useAddonsContext } from './AddonsContext';

export default function Addons({ onNextStep, onPreviousStep }) {
  const { selectedAddonsData, dispatch } = useAddonsContext();

  const handleAddonToggle = (addonName, isChecked) => {
    dispatch({
      type: 'TOGGLE_ADDON',
      payload: {
        addonName,
        isChecked,
      },
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    onNextStep(selectedAddonsData);
  };

  return (
    <div>
      <h2 style={{ color: "hsl(213, 96%, 18%)", fontSize: "30px" }}>Pick add-ons</h2>
      <p style={{ fontSize: "13px", marginTop: "-15px", marginBottom: "30px" }}>Addons help enhance your gaming experience.</p>
      <CheckboxWithText
        heading="Online Services"
        paragraph="Access to multiplayer games"
        price="+$1/mo"
        onChange={(isChecked) => handleAddonToggle('onlineServices', isChecked)}
        isChecked={selectedAddonsData['onlineServices']}
      />
      <CheckboxWithText
        heading="Larger Storage"
        paragraph="Extra 1TB of cloud save"
        price="+$2/mo"
        onChange={(isChecked) => handleAddonToggle('largerStorage', isChecked)}
        isChecked={selectedAddonsData['largerStorage']}
      />
      <CheckboxWithText
        heading="Customizable Profile"
        paragraph="Custom theme on your profile"
        price="+$2/mo"
        onChange={(isChecked) => handleAddonToggle('customizableProfile', isChecked)}
        isChecked={selectedAddonsData['customizableProfile']}
      />
      <form action="">
        <div className='next-step'>
          <button onClick={handleNextStep} style={{ backgroundColor: "hsl(213, 96%, 18%)", color: "white" }}>Next Step</button>
        </div>
        <div className='back-button'>
          <button
            onClick={onPreviousStep}
            style={{
              backgroundColor: "transparent",
              color: "grey",
              marginTop: "35px"
            }}
            className="back-button"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

function CheckboxWithText({ heading, paragraph, price, onChange, isChecked }) {
  return (
    <div className={`checkbox-with-text ${isChecked ? 'checked' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="checkmark"></span>
        <div className="text-content">
          <h3>{heading}</h3>
          <p>{paragraph}</p>
          <h4>{price}</h4>
        </div>
      </label>
    </div>
  );
}