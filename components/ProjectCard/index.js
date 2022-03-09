import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const StyledCardFront = styled(motion.div)`
  width: 18.5vw;
  background: orange;
  height: 300px;
  border-radius: 5px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
  top:0;
`
const StyledCardBack = styled(motion.div)`
  width: 18.5vw;
  height: 300px;
  background: blue;
  backface-visibility: hidden;
  border-radius: 5px;
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
`

const StyledWrapper = styled(motion.div)`
  width: 18.5vw;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px .6rem rgba(0, 0, 0, .5);
  transition: all .3s ease-in-out;
  position: relative;
  perspective: 800px;
`

export default function ProjectCard() {

    const [frontView, setFrontView] = useState(true);

    const cardWrapper = useRef(null);

    useEffect(() => {
        cardWrapper.current.focus();


    })


    function handleFrontClick(event) {
        cardWrapper.current.style.transform = `rotateY(${frontView ? '180' : '0'}deg)`;
        setFrontView(!frontView)
    }

    return (
        <StyledWrapper ref={cardWrapper}>
            <StyledCardFront onClick={handleFrontClick}>
                <div style={{ height: '100%', width: '100%', padding: '.6rem' }}>TEST TEST TEST</div>
            </StyledCardFront>
            <StyledCardBack>
                <div style={{ height: '100%', width: '100%', padding: '.6rem' }}>TEST TEST TEST</div>
            </StyledCardBack>
        </StyledWrapper>
    )
}
