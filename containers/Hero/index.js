import React, { useRef, useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.css';
import useMousePosition from '../../utils/hooks/MousePosition';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import faceIcon from '../../public/images/faceIcon.png'


export default function Hero() {

    const heroRef = useRef(null)

    const { x, y } = useMousePosition(heroRef);
    const { width, height } = useWindowDimensions();

    const percentX = Math.round(50 - ((x / width) * 100));
    const percentY = Math.round(((y / height) * 100))

    // console.log({ percentX, percentY })

    // console.log({ x, width, y, height })
    useEffect(() => {
        heroRef.current.focus();
    }, [])

    return (
        <>
            <div className={styles.hero} ref={heroRef}>
                <Grid
                    container
                    component={motion.div}
                    animate={{
                        rotateY: `${-(percentX / 5)}deg`,
                        rotateX: `${15 - percentY / 3}deg`
                    }}
                >
                    <Grid
                        item xs={12}
                        md={6}
                        component={motion.div}
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <img src={faceIcon.src} style={{ width: '60%' }} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        className={styles.nameWrapper}
                        component={motion.div}
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                    >
                        <span className={styles.name}>Zac</span>
                        <span className={styles.name}>Stowell</span>
                        <span className={styles.name}>Codes</span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
