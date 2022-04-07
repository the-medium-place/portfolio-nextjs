import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useViewportScroll } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';


const Nav = styled(motion.nav)(() => [
    `
    width: 98%;
    margin: 0 auto;
    display: block;
    top: 0;
    height: 45px;
    margin: 0 auto;
    z-index: 100;
    padding: .6rem 1.2rem .6rem .6rem;
    `
])

const NavContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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

const DropdownUL = styled(motion.ul)`
    list-decoration:none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    width: 100%;

`

const StyledLink = styled(motion.a)`
    
`

const StyledLI = styled(motion.li)`
    font-size: 170%;
    font-weight: 600;
    line-height: 2rem;
    width: 100%;
    padding: 1rem;
    margin: .4rem;
    &:hover {
        background: rgb(50,50,50);
        color: #ededed;
    }
    &:hover a {
        color: #ededed !important;
    }
`

const DropdownWrapper = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 100%;
background: #ededed;
display: flex;
color: rgb(50,50,50);
`

export default function NavBar() {


    const { scrollYProgress } = useViewportScroll();
    const { width, height } = useWindowDimensions();

    const [scrollState, setScrollState] = useState();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        scrollYProgress.onChange(x => {
            setScrollState(Math.floor(x * 100))
        })
        if (width > 1000) { setMenuOpen(false) }
    })

    return (
        <>

            <Nav
                animate={{
                    position: scrollState > 12 ? 'fixed' : 'absolute',
                    background: scrollState > 12 || menuOpen ? '#ededed' : 'transparent',
                    color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed',
                    opacity: scrollState < 7 ? 1 : scrollState < 11 ? 0 : 1
                }}
            >
                <NavContentWrapper>
                    <NavLogoWrapper>
                        <h1>{`<ZGS>`}</h1>
                    </NavLogoWrapper>
                    {width > 1000 ? (
                        <NavLinkWrapper>
                            <LinkUL>
                                <li>About</li>

                                <li>
                                    <StyledLink
                                        onClick={() => setMenuOpen(false)}
                                        animate={{
                                            color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                        }}
                                        href="#projects"
                                    >
                                        Projects
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink
                                        onClick={() => setMenuOpen(false)}

                                        href="#contact"
                                        animate={{
                                            color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                        }}
                                    >
                                        Contact
                                    </StyledLink>
                                </li>
                                <li>
                                    Resumé&nbsp;|&nbsp;
                                    <StyledLink
                                        onClick={() => setMenuOpen(false)}

                                        href="ZacStowellResume.pdf"
                                        target="_blank"
                                        animate={{
                                            color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                        }}
                                    >
                                        View
                                    </StyledLink>
                                    &nbsp;-&nbsp;
                                    <StyledLink
                                        onClick={() => setMenuOpen(false)}

                                        href="ZacStowellResume.pdf"
                                        download
                                        animate={{
                                            color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                        }}
                                    >
                                        Download
                                    </StyledLink>
                                </li>

                            </LinkUL>
                        </NavLinkWrapper>
                    ) : (
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <MenuIcon
                                onClick={() => setMenuOpen(!menuOpen)}
                            />


                        </div>
                    )}
                    <DropdownWrapper
                        animate={{
                            transform: menuOpen ? 'translateY(60px)' : 'translateY(-100%)'
                        }}
                    >
                        <DropdownUL>
                            <StyledLI>About</StyledLI>

                            <StyledLI>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                    href="#projects"
                                >
                                    Projects
                                </StyledLink>
                            </StyledLI>
                            <StyledLI>
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="#contact"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    Contact
                                </StyledLink>
                            </StyledLI>
                            <StyledLI>
                                Resumé&nbsp;|&nbsp;
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    target="_blank"
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    View
                                </StyledLink>
                                &nbsp;-&nbsp;
                                <StyledLink
                                    onClick={() => setMenuOpen(false)}

                                    href="ZacStowellResume.pdf"
                                    download
                                    animate={{
                                        color: scrollState > 12 || menuOpen ? 'rgb(50,50,50)' : '#ededed'
                                    }}
                                >
                                    Download
                                </StyledLink>
                            </StyledLI>

                        </DropdownUL>
                    </DropdownWrapper>
                </NavContentWrapper>
                {menuOpen ? (
                    <Overlay setMenuOpen={setMenuOpen} />
                ) : null}
            </Nav>
        </>
    )
}

function Overlay({ setMenuOpen }) {
    useLockBodyScroll();

    return (
        <div
            style={{
                zIndex: '-1',
                background: 'rgba(50,50,50,.8)',
                position: 'fixed',
                top: 70,
                bottom: 0,
                right: 0,
                left: 0

            }}
            onClick={() => setMenuOpen(false)}
        ></div>
    )


}

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => (document.body.style.overflow = originalStyle)
    })
}
