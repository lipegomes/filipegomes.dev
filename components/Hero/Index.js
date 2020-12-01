import React from 'react-dom'
import { FaLinkedin, FaGithub, FaTelegram, FaLink } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Hi, I'm Filipe Gomes</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Engineer</h2>
        <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
          <h3 className='absolute bg-orange text-2xl text-white font-bold uppercase top-0 -mt-6 px-6 py-2'>Contact Me</h3>
          <p className='text-center md:text-left'>
            <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaTelegram className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaLink className='text-5xl md:text-6xl inline-block md:mr-6' />
            <br />
            <span className='pt-2 inline-block'>or drop a line: fgdl.py91@gmail.com</span>
          </p>
        </div>
      </div>
      <div><img src='/images/filipegomes.png' /></div>
    </div>
  )
}

export default Hero
