import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'

const UserStats = ({ user }) => {
  return (
    <p className='text-teal-400 text-center'>Github stats:
      <RiGitRepositoryCommitsLine className='inline-block' /> {user.public_repos} /
      <GoGist className='inline-block' /> {user.public_gists} /
      <FaUsers className='inline-block' /> {user.followers}
    </p>
  )
}
export default UserStats
