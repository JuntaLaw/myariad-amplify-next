import React from 'react';
import Link from "next/link";
import { PiNotePencil } from 'react-icons/pi';

export default function CreateCardButton() {
    return (
        <div className='btn glass ml-4 my-auto flex flex-row justify-start items-center'> 
            <PiNotePencil size={25} className="" />
            <p className='m-1'>add Note Card</p>
        </div>
    );
}
