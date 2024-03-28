import React from 'react'; 
import CreateNoteButton from '../ui/Button/CreateNoteButton';
import CreateCardButton from '../ui/Button/CreateCardButton';
import HomeButton from '../ui/Button/HomeButton';

function NavigationBar({onClick}) { 
    return (
        <nav className="navbar">
            <div className="logo"><img src="/MYARIAD_logo.svg" alt="Myariad Logo" className="w-34 mx-auto drop-shadow-lg" /></div> 
                <HomeButton />
                <CreateCardButton /> 
            
        </nav>
    );
};

export default NavigationBar;