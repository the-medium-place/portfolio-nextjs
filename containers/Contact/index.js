import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button } from '@mui/material'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import saveContact from '/public/images/saveContact.svg'

const SectionWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ContactWrapper = styled(motion.div)`
    padding: .6rem;
    width: 70%;
    margin: .2rem;
    display: flex;
    flex-direction: column;
    align-items:center;

`

const ContactButton = styled(Button)`
    color: #ededed;
    border: 2px solid #ededed;
    &:hover {
        color: rgb(50,50,50);
        background: #ededed;
        box-shadow: 0px 0px 1rem 5px #ededed;
    }
`

const ButtonWrapper = styled(motion.div)`
    width:100%;
    display: flex;
    justify-content:center;

`

const QRWrapper = styled(motion.div)`
width: 40%;
padding: 1.2rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const QRHeader = styled(motion.h2)`
font-size: 150%;
margin-bottom: 1rem;
text-align: center;
`

const QRImg = styled(motion.img)`
height: 100%;
`

const ContactContainer = styled(motion.div)`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
        width: 100%;
    }
`

const Header = styled(motion.h1)`
 font-size: 200%;
 text-align: center;
`

const CONTENT = [
    {
        text: 'Email',
        href: 'email:zgstowell@gmail.com',
        Icon: ContactMailIcon,
        name: "zgstowell@gmail.com"

    },
    {
        text: 'Phone',
        href: 'tel:5035071351',
        Icon: ContactPhoneIcon,
        name: "(503) 507-1351"

    },
    {
        text: 'the-medium-place',
        href: 'https://github.com/the-medium-place',
        Icon: GitHubIcon,
        name: "GitHub"

    },
    {
        text: 'Zachary Stowell',
        href: 'https://www.linkedin.com/in/zachary-stowell/',
        Icon: LinkedInIcon,
        name: "LinkedIn"

    }
]

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <Header

            >Reach Out!
                <br />
                <motion.div
                    style={{
                        width: '100%',
                        margin: 0,
                    }}
                    initial={{
                        border: '0px solid #ededed'
                        // opacity: 0
                    }}
                    animate={{
                        border: '3px solid #ededed'
                        // opacity: 1
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 2
                    }}

                />
            </Header>
            <ContactContainer>
                {CONTENT.map(obj => {
                    return (
                        <ContactWrapper>
                            <p
                                style={{ margin: 12 }}
                            >{obj.text}</p>
                            <ButtonWrapper>

                                <ContactButton
                                    href={obj.href}
                                    endIcon={<obj.Icon />}
                                >
                                    {obj.name}
                                </ContactButton>
                            </ButtonWrapper>

                        </ContactWrapper>
                    )
                })}
            </ContactContainer>
            <QRWrapper>
                <QRHeader >
                    Scan to View/Save my info!
                </QRHeader>
                <QRImg
                    src={saveContact.src}
                />
            </QRWrapper>

        </SectionWrapper>
    )
}
