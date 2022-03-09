import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'



export default function Home() {
  const constraintsRef = useRef(null)

  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Zac Stowell Codes</title>
        </Head>
        <Hero />
        <main className={styles.main}>
          <div style={{ height: 400, background: 'purple', width: '100%' }}></div>

        </main>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '1.5rem', marginBottom: 60, height: 800, flexWrap: 'wrap' }} ref={constraintsRef}>

          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

      </div>
      <Footer />
    </>
  )
}
