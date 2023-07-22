import * as React from 'react';
export default async function Page() {
    return (
        <div className='bg-gradient-to-br from-cyan-500 to-purple-400 min-h-screen'>
            <div className='container mx-auto py-16'>
                <h1 className='text-4xl font-bold text-center mt-10'>
                    Bergabunglah dengan kami About
                </h1>
                <p className='text-base font-bold text-white text-center mt-4'>
                    Menghadirkan solusi digital yang mengubah industri dan
                    mendorong bisnis Anda menuju kesuksesan.
                </p>
                <button className='py-2 px-4  bg-white text-black'>
                    Bergabung
                </button>
            </div>
        </div>
    );
}
