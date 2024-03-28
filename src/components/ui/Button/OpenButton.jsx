// src/components/ui/Button/OpenButton.jsx
import React from 'react';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

const OpenButton = ({ notebookId }) => {
    return (
        // notebookIdを使ってnotepageへのリンクを作成
        <Link href={`/home/notepage/${notebookId}`} className="link-no-underline">
            <button className="btn btn-primary">
            <FaPaw size={20} className="mr-2" />
            <span>OPEN</span>
        </button>
        </Link>
    );
};

export default OpenButton;