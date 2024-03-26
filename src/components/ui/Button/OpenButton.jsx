// src/components/ui/Button/OpenButton.jsx
import React from 'react';
import { FaPaw } from 'react-icons/fa';

const OpenButton = ({ openNotePage }) => {
  return (
    <button className="btn btn-primary" onClick={openNotePage}>
      <FaPaw className="mr-2" />
      <span>OPEN</span>
    </button>
  );
};

export default OpenButton;
