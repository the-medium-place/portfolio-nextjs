import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../containers/Footer'
import Hero from '../containers/Hero'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../utils/projects'


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

          <section
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '1.5rem',
              marginBottom: 60,
              minHeight: 800,
              flexWrap: 'wrap'
            }}
            ref={constraintsRef}
            id="projects"
          >

            {projects.map((project) => {
              return (
                <ProjectCard project={project} key={project.id} />
              )
            })}
          </section>
        </main>

      </div>
      <Footer />
    </>
  )
}
