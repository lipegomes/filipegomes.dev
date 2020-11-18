import React from 'react'

const Index = (props) => {
  return(
    <div>
      <h1>Bem vindo</h1>
      <div>{props.currentDate}</div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const resRepos = fetch('https://api.github.com/users/lipegomes/repos?sort=updated')
  const repos = await resRepos.json()
  return {
    props: {
      currentDate: new Date().toString(),
      repos
    }
  }
}

export default Index
