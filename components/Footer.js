import React from 'react'

const Footer = () => {
  return (

    <div>
      <div>
        <p className='text-white text-center my-8 py-4 border-t'>
          You can find the source-code of this website here:
          <br />
          <a className='hover:underline' target='blank' href='https://github.com/lipegomes/filipegomes.dev'>https://github.com/lipegomes/filipegomes.dev</a>
        </p>
      </div>
      <div>
        <p className='text-center my-8 py-4 border-t'>
          Developed by:
          <br />
          <a className='hover:underline text-white' href='https://filipegomes.dev/'>© 2020 Filipe Gomes </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
