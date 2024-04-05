import React from 'react'; 
import CreateNoteButton from '../ui/Button/CreateNoteButton';
import HomeHere from '../ui/Button/HomeHere';


function NavigationBar({onCreateNotebook, onSignOut}) { 
    return (
        <nav className="navbar">
            <div className="logo"><img src="/MYARIAD_logo.svg" alt="Myariad Logo" className="w-34 mx-auto drop-shadow-lg" /></div> 
                <HomeHere />
                <CreateNoteButton onClick={onCreateNotebook} /> 
        </nav>
    );
};

export default NavigationBar;