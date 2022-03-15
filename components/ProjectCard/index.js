import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import { Chip, Box, Avatar, Grid, ButtonGroup, Button } from '@mui/material';


import logocss from '../../public/images/devlogos/logocss.png';
import logohtml from '../../public/images/devlogos/logohtml.png';
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
            return false;
    }
}



const StyledCardFace = styled(motion.div)`
    width: 100%;
    /*min-height: 12rem;*/
    /*background: #ededed;*/
    border-radius: 5px;
    backface-visibility: hidden;
    position: absolute;
    overflow: hidden;

`

const StyledCardBack = styled(StyledCardFace)`
  transform: rotateY(180deg);
`

const FlipCard = styled(Grid)`
  padding: 0 12px;
  border-radius: 5px;
  perspective: 1000px;
  background: transparent;
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`

const FlipCardInner = styled(motion.div)`
position: relative;
width: 100%;
transition: transform 0.3s;
transform-style: preserve-3d;
transform: rotateY(180deg);
`

const CardImg = styled('img')`
    width: 100%;
    border-radius: 8px;
    transition: all .3s;
`

const TitleText = styled(motion.p)`
    font-size: 1.8rem;
    backface-visibility: hidden;
    font-weight: bold;
`

const TaglineText = styled(motion.p)`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .6rem;
    backface-visibility: hidden;
    transition: transform 0.1s ease-in-out;
    height: 2.4rem;
`

const StyledButton = styled(Button)`
    background: rgb(20, 20, 20);
    color: #ededed;
`

const ViewButton = styled(Button)`
    position: absolute;
    top: 3%;
    right: 5%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    font-weight: 700;
    font-family: 'Lobster', cursive;
    transition: transform .3s eas-in-out;
    &:hover {
    };
    &:active {
        box-shadow: none;
    };
`

const ChipBox = styled(motion.Box)`
padding-x: .3rem; 
display: flex; 
justify-content: center;
flex-wrap: wrap;
flex: 1;
position: absolute;
bottom: 0; 
background: linear-gradient(to bottom, rgba(50, 50, 50, .6), rgba(50, 50, 50, .3));
padding: .6rem 0;
width: 100%;
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

    const cardRef = useRef(null);
    const viewBtnRef = useRef(null)


    const [frontView, setFrontView] = useState(true);
    const [hoverState, setHoverState] = useState(false)

    useEffect(() => {
        cardRef.current.focus();
        viewBtnRef.current.focus();
    })


    function handleHoverStart(event) {
        console.log('hovered')
        setHoverState(true)
        cardRef.current.style.boxShadow = `0px 0px 15px rgba(200, 200, 200, .5)`
        viewBtnRef.current.style.boxShadow = `-4px 4px 10px rgba(50, 50, 50, .5)`
        viewBtnRef.current.style.transform = "scale(1.2)"

    }

    function handleHoverEnd(e) {
        console.log('stopped hover')
        setHoverState(false)
        cardRef.current.style.boxShadow = `none`;
        viewBtnRef.current.style.boxShadow = `none`
        viewBtnRef.current.style.transform = "scale(1)"

    }

    return (
        <FlipCard item xs={12} md={6} onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <TitleText>
                {title}
            </TitleText>
            <TaglineText
                animate={{
                    rotateY: frontView ? '-180deg' : '0deg'
                }}
            >
                {tagline}
            </TaglineText>
            <FlipCardInner
                animate={{
                    rotateY: frontView ? '0deg' : '180deg'
                }}
            >
                <StyledCardFace>
                    <ViewButton variant='contained' onClick={() => { setFrontView(!frontView) }} ref={viewBtnRef}>
                        Info
                    </ViewButton>
                    <CardImg src={screenshot} ref={cardRef} />
                    <ChipBox animate={{
                        opacity: hoverState ? '1' : '0',
                        translateY: hoverState ? '0px' : '90px'

                    }}>
                        {technologies.map(tech => {
                            return (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    avatar={<Avatar alt={tech} src={fetchAvatar(tech) || tech[0]} />}
                                    style={{ margin: 1.3, fontSize: '.7em', background: "#ededed" }}
                                />
                            )
                        })}
                    </ChipBox>
                </StyledCardFace>
                <StyledCardBack>
                    <Box padding=".3rem" display="flex" flexDirection={`column`}>
                        <p style={{ lineHeight: '1.2rem' }}>
                            {description}
                        </p>
                        <hr style={{ width: '100%' }} />
                        <ButtonGroup size="large" aria-label="outlined primary button group" style={{ margin: '0 auto' }}>
                            <StyledButton
                                startIcon={<WebTwoToneIcon />}
                                href={deployed}
                                target="_blank"
                                variant="contained"
                            >
                                Live App
                            </StyledButton>
                            <StyledButton
                                startIcon={<AccountTreeTwoToneIcon />}
                                href={github}
                                target="_blank"
                                variant="contained"
                            >
                                Git Repo
                            </StyledButton>
                        </ButtonGroup>
                    </Box>
                    <Button variant='contained' onClick={() => { setFrontView(!frontView) }}>&larr; Flip Back</Button>
                </StyledCardBack>
            </FlipCardInner>
        </FlipCard>
    )
}
