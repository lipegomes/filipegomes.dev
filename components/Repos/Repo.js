import React from 'react'
import { FaStar } from 'react-icons/fa'

const Repo = ({ repo }) => {
  return (
    <div className='my-3 md:my-0 rounded bg-white p-4 shadow hover:shadow-lg'>
      <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
      <p>Language: {repo.language} / <FaStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
    </div>
  )
}

export default Repo
