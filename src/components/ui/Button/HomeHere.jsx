import React from 'react';
import Link from "next/link";
import { PiHouseLine } from 'react-icons/pi';

const HomeHere = () => {
    return (
        // <Link href="/" className="btn btn-ghost glass my-4 w-30">
            <div className='btn glass ml-4 my-auto flex flex-row justify-start items-center'>
                <PiHouseLine size={25} className='text-white' />
                <p className='m-2 text-white'>Home is here</p>
            </div>
        // </Link>
    );
};

export default HomeHere;