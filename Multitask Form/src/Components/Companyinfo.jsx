import React, { useState, useEffect } from 'react';
import icon from '../assets/images/icon-Arcade.svg';
import icon2 from '../assets/images/icon-Advanced.svg';
import icon3 from '../assets/images/icon-checkmark.svg';
import Switch from './Switch';
import { useCardContext } from './CardContext';

export default function CompanyInfo({ onNextStep, onPreviousStep }) {
  const { selectedCardData, setSelectedCardData } = useCardContext();
  const [isYearly, setIsYearly] = useState(false);
  const [cardPrices] = useState({
    Arcade: { monthly: "9$/month", yearly: "100$/Year" },
    Advanced: { monthly: "15$/month", yearly: "150$/Year" },
    Pro: { monthly: "20$/month", yearly: "200$/Year" },
  });
  const [selectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    // Check if there is selectedCardData from context and set the state accordingly
    if (selectedCardData) {
      setSelectedCard(selectedCardData.name);
      setIsYearly(selectedCardData.price.includes('Year'));
    }
  }, [selectedCardData]);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  const handleCardSelect = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (selectedCard !== '') {
      setSelectedCardData({ name: selectedCard, price: isYearly ? cardPrices[selectedCard].yearly : cardPrices[selectedCard].monthly });
      onNextStep({ name: selectedCard, price: isYearly ? cardPrices[selectedCard].yearly : cardPrices[selectedCard].monthly });
    } else {
      alert('Please select a card');
    }
  };

  return (
    <div className="main-card-form">
      <h2 style={{ color: "hsl(213, 96%, 18%)", fontSize: "30px" }}>Select Plan</h2>
      <p style={{ fontSize: "13px", marginTop: "-15px", marginBottom: "30px" }}>You have the option of monthly and yearly billing</p>
      <form action="">
        <div className="card-container">
          <div className={`card ${selectedCard === 'Arcade' ? 'active' : ''}`} onClick={() => handleCardSelect('Arcade')}>
            <img src={icon} alt="" />
            <h3>Arcade</h3>
            <p style={{ color: "hsl(231, 11%, 63%)", fontSize: "15px" }}>{isYearly ? cardPrices.Arcade.yearly : cardPrices.Arcade.monthly}</p>
          </div>
          <div className={`card ${selectedCard === 'Advanced' ? 'active' : ''}`} onClick={() => handleCardSelect('Advanced')}>
            <img src={icon2} alt="" />
            <h3>Advanced</h3>
            <p style={{ color: "hsl(231, 11%, 63%)", fontSize: "15px" }}>{isYearly ? cardPrices.Advanced.yearly : cardPrices.Advanced.monthly}</p>
          </div>
          <div className={`card ${selectedCard === 'Pro' ? 'active' : ''}`} onClick={() => handleCardSelect('Pro')}>
            <img src={icon2} alt="" />
            <h3>Pro</h3>
            <p style={{ color: "hsl(231, 11%, 63%)", fontSize: "15px" }}>{isYearly ? cardPrices.Pro.yearly : cardPrices.Pro.monthly}</p>
          </div>
        </div>

        <div className="switch-container">
          <Switch onToggle={handleToggle} />
        </div>

        <div className='next-step'>
          <button onClick={handleNextStep} style={{ backgroundColor: " hsl(213, 96%, 18%)", color: "white" }}>Next Step</button>
        </div>
        <div className='back-button'>
          <button
            onClick={onPreviousStep}
            style={{
              backgroundColor: "transparent",
              color: "grey",
              marginTop: "20px"
            }}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
