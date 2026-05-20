import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react';
import img1 from '@/public/images/img1.png';

const page = () => {
    // throw new Error("There was an error");
    return (
        <div>
            <h1 className='my-2'>This is mission page</h1>
            <Image src={img1} alt='dashboard' placeholder='blur'></Image>
            <Button></Button>
        </div>
    );
};

export default page;