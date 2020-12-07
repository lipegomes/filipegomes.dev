import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Undergraduate Degree',
    subject: 'Computer Engineering',
    institution: 'Cruzeiro do Sul Virtual University'
  },
  {
    degree: 'Technical Certificate',
    subject: 'Shipbuilding Technician',
    institution: 'Henrique Lage State Technical School'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl text-center text-white font-bold uppercase mb-5'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none border border-solid rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}

export default Education
