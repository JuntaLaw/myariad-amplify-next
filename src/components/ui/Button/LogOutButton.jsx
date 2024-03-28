import React from 'react';
import Link from "next/link";
import { PiSignOut } from 'react-icons/pi';

export default function LogOutButton() {
    return (
        <div className='flex flex-row justify-start items-center'>
            <PiSignOut size={25} className="mr-2" />
            <p className='m-2'>Log Out</p>
        </div>
    );
}
