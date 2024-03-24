import React from 'react';
import Link from "next/link";
import { PiSignOut } from 'react-icons/pi';

const LogOutButton = () => {
    return (
        // <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiSignOut size={25} className="mr-2" />
                <p className='m-2'>Log Out</p>
            </div>
        // </Link>
    );
};

export default LogOutButton;