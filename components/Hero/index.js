import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div class='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl text-gray-700 uppercase pl-16'>Hi, I'm Filipe Gomes</h1>
        <h2 className='text-4xl md:text-5xl text-teal-400 font-bold uppercase pl-16'>Fullstack Engineer in progress</h2>
        <ContactMe />
      </div>
      <div><img src='/images/filipegomes.png' /></div>
    </div>
  )
}
export default Hero
