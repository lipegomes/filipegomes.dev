import React from 'react'
import { FaLinkedin, FaGithub, FaTelegram, FaLink } from 'react-icons/fa'

const CoontactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-white border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-white text-2xl text-gray-900 font-bold uppercase top-0 -mt-6 px-6 py-2'>Contact Me</h3>
      <p className='text-center md:text-left'>
        <a href='https://www.linkedin.com/in/lipegomes/' target='blank'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://www.github.com/lipegomes/' target='blank'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://t.me/lord_fil' target='blank'>
          <FaTelegram className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://blog.filipegomes.dev/' target='blank'>
          <FaLink className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <br />
        <span className='pt-2 inline-block'>or drop a line: filipegomesdev@gmail.com</span>
      </p>
    </div>
  )
}

export default CoontactMe
