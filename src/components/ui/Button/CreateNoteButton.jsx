import React from 'react';
import Link from "next/link";
import { PiNotebook } from 'react-icons/pi';

const CreateNoteButton = () => {
    return (
        // <Link href="/" className="btn btn-ghost glass my-4 w-30">
            <div className='btn my-2 w-30 flex flex-row justify-start items-center'>
                <PiNotebook size={25} className='' />
                <p className='m-2'>新規ノート作成</p>
            </div>
        // </Link>
    );
};

export default CreateNoteButton;