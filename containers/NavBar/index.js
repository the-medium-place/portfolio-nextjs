import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, useViewportScroll } from 'framer-motion'

const Nav = styled(motion.nav)(() => [
    `
    width: 100vw;
    display: block;
    top: 0;
    height: 45px;
    margin: 0 auto;
    z-index: 100;
    padding: .6rem;
    `
])

const NavContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
`

const NavLogoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 200%;
    width: 15%;
    height: 100%;
    padding: .6rem;
`

const NavLinkWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
    width: 70%;
    height: 100%;
    padding: .6rem;
`

const LinkUL = styled.ul`
    list-decoration: none;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-weight: 700;
`

const StyledLink = styled(motion.a)`
    
`

export default function NavBar() {


    const { scrollYProgress } = useViewportScroll();

    const [scrollState, setScrollState] = useState();


    scrollYProgress.onChange(x => {
        setScrollState(Math.floor(x * 100))
    })

    return (
        <Nav
            animate={{
                position: scrollState > 12 ? 'fixed' : 'absolute',
                background: scrollState > 12 ? '#ededed' : 'transparent',
                color: scrollState > 12 ? 'rgb(50,50,50)' : '#ededed',
                opacity: scrollState < 7 ? 1 : scrollState < 11 ? 0 : 1
            }}
        >
            <NavContentWrapper>
                <NavLogoWrapper>
                    <h1>{`<ZGS>`}</h1>
                </NavLogoWrapper>
                <NavLinkWrapper>
                    <LinkUL>
                        <li>About</li>

                        <li>
                            <StyledLink
                                animate={{
                                    color: scrollState > 12 ? 'rgb(50,50,50)' : '#ededed'
                                }}
                                href="#projects"
                            >
                                Projects
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink
                                href="#contact"
                                animate={{
                                    color: scrollState > 12 ? 'rgb(50,50,50)' : '#ededed'
                                }}
                            >
                                Contact
                            </StyledLink>
                        </li>
                        <li>
                            Resumé&nbsp;|&nbsp;
                            <StyledLink
                                href="ZacStowellResume.pdf"
                                target="_blank"
                                animate={{
                                    color: scrollState > 12 ? 'rgb(50,50,50)' : '#ededed'
                                }}
                            >
                                View
                            </StyledLink>
                            &nbsp;-&nbsp;
                            <StyledLink
                                href="ZacStowellResume.pdf"
                                download
                                animate={{
                                    color: scrollState > 12 ? 'rgb(50,50,50)' : '#ededed'
                                }}
                            >
                                Download
                            </StyledLink>
                        </li>

                    </LinkUL>
                </NavLinkWrapper>
            </NavContentWrapper>
        </Nav>
    )
}
