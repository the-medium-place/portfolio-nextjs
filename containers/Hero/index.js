import React, { useRef, useEffect, useState } from 'react'
import styles from '../../styles/Hero.module.css';
import useMousePosition from '../../utils/hooks/MousePosition';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import faceIcon from '../../public/images/faceIcon.png'

import logomongodb from '../../public/images/devlogos/logomongodb.png';
import logomongoose from '../../public/images/devlogos/logomongoose.png';
import logomysql from '../../public/images/devlogos/logomysql.png';
import logonode from '../../public/images/devlogos/logonode.png';
import logoreact from '../../public/images/devlogos/logoreact.png';
import logosequelize from '../../public/images/devlogos/logosequelize.png';
import logoGraphQL from '../../public/images/devlogos/logoGraphQL.png';

const devLogos = [
    { image: logomongodb, name: 'MongoDB' },
    { image: logomongoose, name: 'Mongoose' },
    { image: logomysql, name: 'MySQL' },
    { image: logosequelize, name: 'Sequelize' },
    { image: logoreact, name: 'ReactJS' },
    { image: logoGraphQL, name: 'GraphQL' },
    { image: logonode, name: 'Node.js' }
]

console.log(styles)
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
                    style={{ flexDirection: 'row' }}
                    animate={{
                        rotateY: `${-(percentX / 5)}deg`,
                        rotateX: `${15 - percentY / 3}deg`
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
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
                    <Grid
                        item xs={12}
                        sm={6}
                        className={styles.imgWrapper}
                        component={motion.div}
                        animate={{
                            rotateY: `${-(percentX / 2)}deg`,
                            rotateX: `${15 - percentY / 3}deg`
                        }}
                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                    >
                        <img src={faceIcon.src} style={{ width: width <= 600 ? '40%' : '60%' }} />
                    </Grid>

                </Grid>
                <div style={{ width: '100%' }}>
                    <p style={{ margin: '30px auto', textAlign: 'center', fontSize: '125%' }}>

                        That's me! I'm Zac Stowell. I love puzzles and problem solving. I love to code.
                    </p>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        {devLogos.map((img) => {
                            return (
                                <div
                                    style={{
                                        height: '100%',
                                        width: '10%',
                                        display: 'flex',
                                        flexDirection: 'column', justifyContent: 'center', transformStyle: 'preserve-3d', perspective: '1000px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img src={img.image.src} style={{ width: '100%', }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
