import React from 'react'; 
import CreateCardButton from '../ui/Button/CreateCardButton';
import HomeButton from '../ui/Button/HomeButton';

function NoteNavBar({ onCreateNoteCard }) { 
    return (
        <nav className="navbar">
            <div className="logo"><img src="/MYARIAD_logo.svg" alt="Myariad Logo" className="w-34 mx-auto drop-shadow-lg" /></div> 
                <HomeButton />
                <CreateCardButton onClick={onCreateNoteCard} /> 
        </nav>
    );
};

export default NoteNavBar;