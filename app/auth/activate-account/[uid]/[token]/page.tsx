'use client'
import { useEffect, useState } from 'react';
import { GridLoader, HashLoader } from 'react-spinners';

export default function ActivateAccount() {
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        // Simulate account activation
        setTimeout(() => {
        setLoading(false)

        }, 8000);
    }, []);

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center flex-col'>
        {loading ? (
            <div className='flex flex-col justify-center items-center' >
            <h1>Please wait for a while,account is activating</h1>
            <GridLoader className='mt-4' color='#000000'/>
            </div>
        ) : null}
        </div>
    </>
  )
}
