import React from 'react';
import { useCardContext } from './CardContext';
import { useAddonsContext } from './AddonsContext';

export default function Summary({ onNextStep, onPreviousStep ,onStepChange}) {
  const { selectedCardData } = useCardContext();
  const { selectedAddonsData } = useAddonsContext();

  
  
  const cardPrice = selectedCardData ? parseFloat(selectedCardData.price.replace('$', '')) : 0;

  const capitalizeFirstLetter = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    onNextStep();
  };


  const addonPrice = {
    onlineServices: 1,
    largerStorage: 2,
    customizableProfile: 2,
  };

  const selectedAddonsTotal = Object.keys(selectedAddonsData).reduce(
    (total, addonName) => total + (selectedAddonsData[addonName] ? addonPrice[addonName] : 0),
    0
  );
  const totalPrice = cardPrice + selectedAddonsTotal;
  

  return (
    <div>
       <h2 style={{ color: "hsl(213, 96%, 18%)", fontSize: "30px" }}>Summary</h2>
      <p style={{ fontSize: "13px", marginTop: "-15px", marginBottom: "30px" }}>Double check everything looks Ok before confirming</p>
      <div className='addonssummary'>
        {selectedCardData && (
          <div className='addonscard'>
            <h3>{selectedCardData.name}</h3>
            <span style={{fontSize: '13px'}} onClick={() => onStepChange(2)} className="change-button">
            Change
          </span>
            <h4>{selectedCardData.price}</h4>
          </div>
        )}
     


      {/* Show selected add-ons data */}
      <hr />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.keys(selectedAddonsData).map((addonName) => (
          // Render the addon name and price only if it's selected
          selectedAddonsData[addonName] && (
            <li key={addonName} style={{ marginBottom: '8px' }}>
              <span style={{ marginRight: '10px', paddingLeft:'5%' ,color : 'grey'}}>{capitalizeFirstLetter(addonName)}</span>
              <span style={{  position:'absolute',right: '20%',color: 'black' }} >${addonPrice[addonName]}</span>
            </li>
          )
        ))}
      </ul>
      </div>
      <div className='summarytotal'>
      <p style= {{color:'grey'}}>Total</p>
      <h2 style={{color:'blue'}}>${totalPrice}</h2>
      </div>
      <div className='next-step'>
          <button onClick={handleNextStep} style={{ backgroundColor: " hsl(213, 96%, 18%)", color: "white" }}>Confirm</button>
        </div>
        <button
  onClick={onPreviousStep}
  style={{
    backgroundColor: "transparent",
    color: "grey",
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: "90px", // Add some margin at the bottom to separate it from the content
  }}
>
  Go Back
</button>
    </div>
    
   
  );
}
