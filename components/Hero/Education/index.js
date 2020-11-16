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
      <h3 className='text-4xl text-gray-900 font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-indigo-500 text-gray-100 rounded-lg shadow-xl'>
        {degrees.map((degree, i) => {
          <EducationItem key={'i' + i} degree={degree} />
        })}
      </div>
    </div>
  )
}
export default Education
