import React from 'react'
import { FaLinkedinIn, FaGithub, FaTelegram, FaLink } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-indigo500 border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-indigo500 py-2 px-6 top-0 -mt-5 text-2xl text-gray-100 font-bold uppercase'>Contact Me</h3>
      <p className='text-center md:text-left'>
        <a href='https://www.linkedin.com/in/lipegomes/' title='Linkedin Profile'>
          <FaLinkedinIn className='text-teal-500 text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://github.com/lipegomes' title='GitHub Profile'>
          <FaGithub className='text-teal-500 text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://t.me/lord_fil' title='Telegram Contact'>
          <FaTelegram className='text-teal-500 text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://blog.filipegomes.dev/' title='Filipe Gomes Blog'>
          <FaLink className='text-teal-500 text-5xl md:text-6xl inline-block' />
        </a>
        <br />
        <spam className='text-indigo-500 inline-block mt-4'>
          or drop a line: fgdl.py91@gmail.com
        </spam>
      </p>
    </div>
  )
}
export default ContactMe
