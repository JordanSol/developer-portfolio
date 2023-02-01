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
    <div className="w-full min-h-screen text-barlow">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
