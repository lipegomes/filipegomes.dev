import React from 'react'
import { FaLinkedin, FaGithub, FaTelegram, FaLink } from 'react-icons/fa'

const CoontactMe = () => {
  return (
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
  )
}

export default CoontactMe
