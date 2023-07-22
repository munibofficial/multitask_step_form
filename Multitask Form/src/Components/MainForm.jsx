import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import CompanyInfo from './Companyinfo';
import Addons from './Addons';
import Summary from './Summary';
import Thankyou from './Thankyou';
import Sidebar from './Sidebar';

export default function MainForm() {
  const [step, setStep] = useState(1);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });
  const handleStepChange = (stepNumber) => {
    setStep(stepNumber);
  };

  const handleNextStep = (data) => {
    setSelectedCardData(data);
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onNextStep={handleNextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return (
          <CompanyInfo
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
            selectedCardData={selectedCardData}
            setSelectedCardData={setSelectedCardData}
          />
        );
case 3:
  return (
    <Addons
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
    />
  );
      case 4:
        return <Summary onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} selectedCardData={selectedCardData} onStepChange = {handleStepChange} />;
      case 5:
        return <Thankyou />;
      default:
        return null;
    }
  };

  return (
    <div className="main-form-container">
      <div className="main-form">
        <Sidebar currentStep={step} />
        <div className="form-container">{renderForm()}</div>
      </div>
    </div>
  );
}
