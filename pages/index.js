import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../containers/Footer'
import Hero from '../containers/Hero'
import { useRef } from 'react'
import styled from '@emotion/styled'
import Projects from '../containers/Projects'

const Spacer = styled('div')`
  width: 85%;
  border: 1px solid #ededed;
  margin: 8vh auto;
`


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
        <main className={styles.main}>
          <Hero id="hero" />
          <Spacer />
          <Projects />


        </main>

      </div>
      <Footer />
    </>
  )
}
