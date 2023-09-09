'use client' // Error components must be Client Components

import PrimeButton from '@/components/core/Button/PrimeButton'
import { H2 } from '@/components/core/Headings/Headings'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import erro500Image from 'public/images/error500.png'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    if (error.message.toLowerCase() == "unauthorized") {
      signOut()
    }
  },[])
  return (
    <div className='w-full h-full flex justify-center flex-col items-center mt-10'>
      <Image src={erro500Image} alt='error Image' width={300} height={0} priority />
      <div className='flex flex-col items-center gap-5'>
        <H2 className='text-center'>Oops, Server Error</H2>
        <p className='text-sm text-center'>Coba beberapa saat lagi, atau hubungi team renggani.</p>
        <a href="">
          <PrimeButton severity='help' rounded={false}>Refresh</PrimeButton>
        </a>
      </div>
    </div>
  )
}