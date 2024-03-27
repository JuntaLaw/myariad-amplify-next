import React from 'react';
import Link from "next/link";
import { PiArticle } from 'react-icons/pi';

export default function PublishButton() {
    return (
        <div className='btn my-2 w-30 flex flex-row justify-start items-center'>
            <PiArticle size={25} className='' />
            <p className='m-2'>記事として発行</p>
        </div>
    );
}
