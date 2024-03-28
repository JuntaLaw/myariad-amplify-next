// src/components/ui/Button/OpenButton.jsx
import React from 'react';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

export default function OpenButton({ notebookId }) { 
    return (
    <Link href={`home/notepage/${notebookId}`} passHref>     
        <button className="btn btn-primary">
            <FaPaw className="mr-2" />
            <span>OPEN</span>
        </button>
    </Link>
    );
}
