import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Image from 'next/image'

import { Card, CardContent, CardHeader, CardMedia, Chip, Box, Avatar, Grid } from '@mui/material';


import logocss from '../../public/images/devlogos/logocss.png';
import logohtml from '../../public/images/devlogos/logohtml.png';
import logojavascript from '../../public/images/devlogos/logojavascript.png';
import logomongodb from '../../public/images/devlogos/logomongodb.png';
import logomongoose from '../../public/images/devlogos/logomongoose.png';
import logomysql from '../../public/images/devlogos/logomysql.png';
import logonode from '../../public/images/devlogos/logonode.png';
import logoreact from '../../public/images/devlogos/logoreact.png';
import logosequelize from '../../public/images/devlogos/logosequelize.png';
import logoGraphQL from '../../public/images/devlogos/logoGraphQL.png';
import logoBootstrap from '../../public/images/devlogos/logoBootstrap.png';

function fetchAvatar(tech) {
    // console.log("Avatar: ", tech)
    switch (tech) {
        case 'HTML5':
            return logohtml.src;
        case 'CSS3':
            return logocss.src;
        case 'Node.js':
            return logonode.src;
        case 'MySQL':
            return logomysql.src;
        case 'Sequelize':
            return logosequelize.src;
        case 'MongoDB':
            return logomongodb.src;
        case 'Mongoose':
            return logomongoose.src;
        case 'React JS':
            return logoreact.src;
        case 'GraphQL':
            return logoGraphQL.src;
        case 'Bootstrap':
            return logoBootstrap.src;
        default:
            return tech[0];
    }
}



const StyledCardFace = styled(motion.div)`
    width: 100%;
    height: 100%;
    background: #ededed;
    border-radius: 5px;
    backface-visibility: hidden;
    position: absolute;
    box-shadow: 0px 0px .8rem rgba(180, 180, 180, .3);

`

const StyledCardBack = styled(StyledCardFace)`
  transform: rotateY(180deg);
`

const FlipCard = styled(motion.div)`
  width: 25vw;
  min-height: 300px;
  border-radius: 5px;
  perspective: 1000px;
  background: transparent;
  margin-bottom: 30px
`

const FlipCardInner = styled(motion.div)`
position: relative;
width: 100%;
height: 100%;
transition: transform 0.3s;
transform-style: preserve-3d;
transform: rotateY(180deg);

`

const CardImg = styled('img')`
    width: 100%;
    border-radius: 5px 5px 0px 0px;

`

export default function ProjectCard(props) {

    // console.log(props)
    const {
        id,
        github,
        deployed,
        description,
        title,
        tagline,
        screenshot,
        technologies
    } = props.project;


    const [frontView, setFrontView] = useState(true);

    function handleHoverStart(event) {
        setFrontView(false)
    }

    function handleHoverEnd(event) {
        setFrontView(true);
    }

    return (
        <FlipCard
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            id={id}
        >
            <FlipCardInner
                animate={{
                    rotateY: frontView ? '0deg' : '180deg'
                }}>
                <StyledCardFace >
                    <CardImg src={screenshot} />
                    <Box marginBottom="15px" display="flex" justifyContent="center" flexWrap="wrap" flex={1}>
                        {technologies.map(tech => {
                            return (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    avatar={<Avatar alt={tech} src={fetchAvatar(tech)} />}
                                    style={{ margin: 1.3 }}
                                />
                            )
                        })}
                    </Box>
                </StyledCardFace>
                <StyledCardBack>
                    <div style={{ height: '100%', width: '100%', padding: '.6rem' }}>BACKSIDE TEST</div>
                </StyledCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}
