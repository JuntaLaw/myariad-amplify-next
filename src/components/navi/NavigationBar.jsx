import React from 'react'; 
import CreateNoteButton from '../ui/Button/CreateNoteButton';
import HomeHere from '../ui/Button/HomeHere';

// CreateNoteButtonをクリックNotebookコンポーネントがNotebookHomeコンポーネントに追加される機能
function NavigationBar({onCreateNotebook}) { 
    return (
        <nav className="navbar">
            <div className="logo"><img src="/MYARIAD_logo.svg" alt="Myariad Logo" className="w-34 mx-auto drop-shadow-lg" /></div> 
                <HomeHere />
                <CreateNoteButton onClick={onCreateNotebook} /> {/* ここでonClickイベントを設定 */} 
        </nav>
    );
};

export default NavigationBar;