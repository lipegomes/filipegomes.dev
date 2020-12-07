import React from 'react'

const EducationItem = ({ degree }) => {
  return (
    <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
      <h4 className='text-lg text-white font-bold uppercase mb-2'>{degree.degree}</h4>
      <p className='text-2xl uppercase'>{degree.subject}<br />
        <span className='text-lg font-bold normal-case'>{degree.institution}</span>
      </p>
    </div>
  )
}

export default EducationItem
