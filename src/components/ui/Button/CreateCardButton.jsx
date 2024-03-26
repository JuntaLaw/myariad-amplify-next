import React from 'react';
import Link from "next/link";
import { PiNotePencil } from 'react-icons/pi';

const CreateCardButton = () => {
    return (
        // <div className="btn btn-ghost glass my-4 w-30">
        <div className='btn glass ml-4 my-auto flex flex-row justify-start items-center'>
                <PiNotePencil size={25} className="" />
                <p className='m-1'>add Note Card</p>
            </div>
        // </div>
    );
};

export default CreateCardButton;