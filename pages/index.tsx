import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Skills from '../components/Skills'
import Work from "../components/Work"
import About from '../components/About'

const Home: NextPage = () => {

  return (
      <div className=''>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
      </div>
  )
}

export default Home
