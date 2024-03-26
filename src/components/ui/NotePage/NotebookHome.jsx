// src/components/ui/NotePage/NotebookHome.jsx
import React, { useState } from 'react'; 
import './NotebookHome.css';

const NotebookHome = ({ notebooks }) => {
    return (
        <div className="notebook-home">
            <div className="notebooks">
                {notebooks}
            </div>
        </div>
    );
};

export default NotebookHome;