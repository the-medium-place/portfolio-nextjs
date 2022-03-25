import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Nav = styled(motion.nav)(() => [
    `
    width: 100vw;
    diaplay: block;
    position: absolute;
    top: 0;
    height: 45px;
    margin: 0 auto;
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
    border: 1px solid white;
    padding: .6rem;
`

const NavLinkWrapper = styled.div`
display: flex;
align-items: center;
    width: 70%;
    height: 100%;
    border: 1px solid white;
    padding: .6rem;
`

const LinkUL = styled.ul`
    list-decoration: none;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    width: 100%;
`

export default function NavBar() {
    return (
        <Nav>
            <NavContentWrapper>
                <NavLogoWrapper>
                    <h1>{`<ZGS>`}</h1>
                </NavLogoWrapper>
                <NavLinkWrapper>
                    <LinkUL>
                        <li>About</li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>Resumé</li>

                    </LinkUL>
                </NavLinkWrapper>
            </NavContentWrapper>
        </Nav>
    )
}
