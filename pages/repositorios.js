import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Meu repositórios</h1>
      <h2 className='font-bold text-3xl'>Meus repositórios no Github</h2>
      <p>Github stats: public_repos {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 shadow hover:shadow-lg'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
          </div>
        )
      })}
    </div>
  )
}
export async function getServerSideProps (context) {
  const { repos, user } = await getUser('lipegomes')
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index
