// src/components/ui/Button/OpenButton.jsx
import React from 'react';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

const OpenButton = ({ notebookId }) => { 
    return (
    <Link href={`/notepage/${notebookId}`} passHref>     
        <button className="btn btn-primary">
            <FaPaw className="mr-2" />
            <span>OPEN</span>
        </button>
    </Link>
    );
};

export default OpenButton;
