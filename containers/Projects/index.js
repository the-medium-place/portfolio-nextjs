
import ProjectCard from '../../components/ProjectCard'
import projects from '../../utils/projects'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'


export default function Projects() {


    return (
        <Grid
            container
            id="projects"
            display={'flex'}
            width='100%'
            // spacing={3}
            alignItems={'center'}
            justifyContent={'space-around'}
        >

            {projects.map((project) => {
                return (
                    <ProjectCard project={project} key={project.id} />
                )
            })}
        </Grid>
    )
}
