
import ProjectCard from '../../components/ProjectCard'
import projects from '../../utils/projects'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'




export default function Projects() {
    return (
        <Grid
            container
            spacing={0}
            id="projects"
            display={'flex'}
            minHeight={350}
            alignItems={'stretch'}
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
