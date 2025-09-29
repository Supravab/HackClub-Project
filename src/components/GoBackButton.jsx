import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} style={{ marginBottom: '16px' }}>
      ← Go Back
    </button>
  );
};

export default GoBackButton;
