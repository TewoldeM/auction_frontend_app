import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg:black border border-black p-32 '>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <Link href="/src/components/About">
        <Button>
        About the PrimeAuction
      </Button> 
        </Link>
     
      <p>This the foter AllRight Reserved @2024</p>
      
     
      </div>
    </div>
  )
}

export default Footer
