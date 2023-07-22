import React from 'react';

export default function PersonalInfo({ onNextStep, formData, setFormData }) {
  const { name, email, number } = formData;

  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Validate number
    if (!number.trim()) {
      errors.number = 'Number is required';
    } else if (isNaN(number)) {
      errors.number = 'Invalid number';
    }

    setErrors(errors);

    // Check if there are any errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed to next step
      onNextStep();
    }
  };

  return (
    <div className="personal-info">
      <div className="heading">
        <h2 style={{ color: "hsl(213, 96%, 18%)", fontSize: "30px" }}>Personal Info</h2>
      </div>
      <p style={{ fontSize: "10px" }}>Please Provide Your name , email address ,and phone number</p>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="Number">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          />
          {errors.number && <span className="error">{errors.number}</span>}
        </div>
        <div>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
}
