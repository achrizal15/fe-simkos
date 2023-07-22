import Button from '@/components/core/Button';
import Image from 'next/image';
import * as React from 'react';
export default function Page() {
    return (
        <div className='bg-gradient-to-br from-cyan-500 to-purple-400 min-h-screen'>
            <div className='container mx-auto py-16'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='text-4xl font-bold text-center mt-10 uppercase'>
                            Bergabunglah dengan kami
                        </h1>
                        <p className='text-base font-bold text-white text-left mt-4'>
                            Menghadirkan solusi digital yang mengubah industri
                            dan mendorong bisnis Anda menuju kesuksesan.
                        </p>
                        <Button variant={'primary'} className='mt-10'>
                            Bergabung
                        </Button>
                    </div>
                    <div>
                        <Image
                            src={'/hero.png'}
                            width={500}
                            height={700}
                            alt='hero'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
