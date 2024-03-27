import React from 'react';
import Link from "next/link";
import { PiHouseLine } from 'react-icons/pi';

const HomeButton = () => {
    return (
        <Link href="/home" className="link-no-underline">
            <div className='btn glass ml-4 my-auto flex flex-row justify-start items-center'>
                <PiHouseLine size={25} className='' />
                <p className='m-2'>Back to Home</p>
            </div>
        </Link>
    );
};

export default HomeButton;