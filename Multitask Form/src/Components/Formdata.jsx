// FormData.js
import { useState } from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    selectedCardData: null,
  });

  return { formData, setFormData };
};

export default useFormData;
