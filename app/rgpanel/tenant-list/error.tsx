'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  return (
    <div>
      <h2>Something went wrong!</h2>
      {error.message}
    </div>
  )
}