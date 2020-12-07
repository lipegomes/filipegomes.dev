import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'

const UserStats = ({ user }) => {
  return (
    <p className='text-center'>
      Github stats: <RiGitRepositoryFill className='inline-block' /> {user.public_repos} /
      <GoGist className='inline-block' /> {user.public_gists} /
      <FaUsers className='inline-block' /> {user.followers}
    </p>
  )
}

export default UserStats
