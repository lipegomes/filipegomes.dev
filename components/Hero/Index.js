import React from 'react'
import CoontactMe from './ContacteMe'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Hi, I'm Filipe Gomes</h1>
        <h2 className='text-4xl text-gray-100 font-bold md:text-5xl uppercase pl-16'>Fullstack Engineer</h2>
        <CoontactMe />
      </div>
      {/* <div><img src='/images/filipegomes.png' /></div> */}
    </div>
  )
}

export default Hero
