import React from 'react';
import icon1 from '../assets/images/bg-sidebar-desktop.svg'
export default function Sidebar({ currentStep }) {
  return (
    <div className="sidebar" style={{ backgroundImage: `url(${icon1})`}} >
      <ul>
        <li className={currentStep === 1 ? 'active' : ''}>
          <div className="step-circle">1</div>
          <span>
            <small>Step 1</small>
            Personal Info
          </span>
        </li>
        <li className={currentStep === 2 ? 'active' : ''}>
          <div className="step-circle">2</div>
          <span>
            <small>Step 2</small>
            Company Info
          </span>
        </li>
        <li className={currentStep === 3 ? 'active' : ''}>
          <div className="step-circle">3</div>
          <span>
            <small>Step 3</small>
            Add-Ons
          </span>
        </li>
        <li className={currentStep === 4 ? 'active' : ''}>
          <div className="step-circle">4</div>
          <span>
            <small>Step 4</small>
            Summary
          </span>
        </li>
      </ul>
      <div>
       
      </div>
    </div>
  );
}
