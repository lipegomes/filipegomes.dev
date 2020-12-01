import React from 'react'
import getUser from '../utils/getUser'
import { FaUsers, FaStar } from 'react-icons/fa'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { GoGist } from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero/Index'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <PageHead />
      <Hero />


      <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
        <h3 className='text-4xl text-center text-orange pt-12 uppercase'>What I do</h3>
        <p className='text-2xl'>Fullstack Engineer</p>
      </div>

      <div>
        <h3 className='text-4xl text-center text-orange font-bold uppercase mb-5'>My Education</h3>
        <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
          {[1, 2].map(i => (
            <div key={'education-' + i} className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
              <h4 className='text-lg text-orange font-bold uppercase mb-2'>Undergraduate Degree</h4>
              <p className='text-2xl uppercase'>Computer Engineering</p>
              <span className='text-lg font-bold normal-case'>Cruzeiro do Sul Virtual University</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='mx-6 md:mx-0 text-4xl text-center text-orange font-bold uppercase'>Tech contributions</h3>
        <p className='text-center'>Github stats: <RiGitRepositoryFill className='inline-block' /> {user.public_repos} / <GoGist className='inline-block' /> {user.public_gists} / <FaUsers className='inline-block' /> {user.followers}</p>
        <div className='md:grid md:grid-cols-4 md:gap-2 md:my-6'>
          {repos.map(repo => {
            return (
              <div key={repo.id} className='my-3 md:my-0 rounded bg-white p-4 shadow hover:shadow-lg'>
                <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                <p>Language: {repo.language} / <FaStar className='inline-block' /> Stars: {repo.stargazers_count}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className>
        <p className='text-center my-8 py-4 border-t-2'>
          You can find the source-code of this website here:
          <br />
          <a href=''>https://github.com/lipegomes.com/filipegomes.dev</a>
        </p>
      </div>
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
