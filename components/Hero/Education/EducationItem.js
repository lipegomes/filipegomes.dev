import React from 'react'

const EducationItem = ({ degree }) => {
  return (
    <div className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
      <h4 className='text-lg text-gray-900 uppercase font-bold mb-2'>{degree.degree}</h4>
      <p className='text-2xl uppercase'>{degree.sunject}</p>
      <span className='text-lg normal-case'>{degree.institution}</span>
    </div>
  )
}
export default EducationItem
