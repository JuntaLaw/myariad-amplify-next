import React from 'react';
import HomeButton from '../ui/Button/HomeButton';
import CreateNoteButton from '../ui/Button/CreateNoteButton';
import CreateCardButton from '../ui/Button/CreateCardButton';
import TrashButton from '../ui/Button/TrashButton';
import PublishButton from '../ui/Button/PublishButton';
import LogOutButton from '../ui/Button/LogOutButton'; 

const Sidebar = () => {
    return (
        <div className="glass text-black w-60 h-screen flex flex-col items-center justify-start">

            <div className="mb-2">
                <img src="/MYARIAD_logo.svg" alt="Myariad Logo" className="w-34 mx-auto mt-4 drop-shadow-lg" />
            </div>

            <div className='flex flex-col justify-start mt-5'>
                <HomeButton />
                <CreateNoteButton />
                <CreateCardButton />
                <TrashButton />
                <PublishButton />
            </div>
            <div className="mt-auto mb-10"> 
                <LogOutButton />
            </div>

        </div>
    );
};

export default Sidebar;