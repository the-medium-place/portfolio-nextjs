
import ProjectCard from '../../components/ProjectCard'
import projects from '../../utils/projects'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'


export default function Projects() {


    return (
        <Grid
            container
            // spacing={3}
            id="projects"
            display={'flex'}
            minHeight={350}
            width='75vw'
            alignItems={'center'}
            justifyContent={'center'}
        // flexWrap={'wrap'}
        >

            {projects.map((project) => {
                return (
                    <ProjectCard project={project} key={project.id} />
                )
            })}
        </Grid>
    )
}
