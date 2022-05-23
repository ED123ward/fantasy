import { Community } from 'assets'
import React from 'react'
import About from './About'
import Landing from './Landing'
import Product from './Product'

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Product />
      <Community width="100%" height="auto" />
    </>
  )
}

export default Home
