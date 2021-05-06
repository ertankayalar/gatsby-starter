import React from 'react'
import BigButton from './big-button'
export default function Hero({
  heroTitle,
  heroMessage,
  buttonLink,
  buttonText,
}) {
  return (
    <div className='w-full bg-gray-100 h-auto'>
      <div className='container mx-auto py-20 text-center'>
        <h1 className='text-4xl py-10 text-brown-500'>{heroTitle}</h1>
        <p className='text-2xl text-gray-500 py-10'>{heroMessage}</p>

        <BigButton to={buttonLink}>{buttonText}</BigButton>
      </div>
    </div>
  )
}
