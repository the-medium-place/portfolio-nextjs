
import ProjectCard from '../../components/ProjectCard'
import projects from '../../utils/projects'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'

const Header = styled.h1`
font-size: 200%;
margin-bottom: 2rem;

`

export default function Projects() {


    return (
        <div id="projects" >
            <Header>I made these</Header>
            <Grid
                container

                display={'flex'}
                width='85vw'
                padding=".2rem"
                alignItems={'center'}
                justifyContent={'space-around'}
            >

                {projects.map((project) => {
                    return (
                        <ProjectCard project={project} key={project.id} />
                    )
                })}
            </Grid>
        </div>
    )
}
