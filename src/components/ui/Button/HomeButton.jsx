import React from 'react';
import Link from "next/link";
import { PiHouseLine } from 'react-icons/pi';

const HomeButton = () => {
    return (
        // <Link href="/" className="btn btn-ghost glass my-4 w-30">
            <div className='btn my-2 w-30 flex flex-row justify-start items-center'>
                <PiHouseLine size={25} className='' />
                <p className='m-2'>ホームに戻る</p>
            </div>
        // </Link>
    );
};

export default HomeButton;