import React from 'react';
import Link from "next/link";
import { PiTrash } from 'react-icons/pi'; 

const TrashButton = () => {
    return (
        // <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='btn my-2 w-30 flex flex-row justify-start items-center'>
                <PiTrash size={25} className='' />
                <p className='m-2'>ゴミ箱</p>
            </div>
        // </Link>
    );
};

export default TrashButton;