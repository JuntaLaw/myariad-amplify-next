import React from 'react';
import Link from "next/link";
import { PiNotebook } from 'react-icons/pi';

const CreateNoteButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="create-note-button">
            <div className='btn glass ml-4 mt-2 mb-2 flex flex-row justify-start items-center'>
                <PiNotebook size={25} className='' />
                <p className='m-1'>Add Notebook</p>
            </div>
        </button>
    );
};

export default CreateNoteButton;