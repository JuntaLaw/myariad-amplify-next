import React from 'react';
import { PiSignOut } from 'react-icons/pi';

// onClickプロパティを受け取るように変更
export default function LogOutButton({ onClick }) {
    return (
        <div className='flex flex-row justify-start items-center' onClick={onClick}>
            <PiSignOut size={25} className="mr-2" />
            <p className='m-2'>Log Out</p>
        </div>
    );
}
