import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero/Index'
import Summary from '../components/Summary'
import Education from '../components/Education/Index'
import Footer from '../components/Footer'
import Repos from '../components/Repos/Index'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto bg-network'>
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repos user={user} repos={repos} />
      <Footer />
    </div>
  )
}
export async function getServerSideProps (context) {
  const request = await fetch(process.env.API_URL + '/api/getUser')
  const { repos, user } = await request.json()

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index
