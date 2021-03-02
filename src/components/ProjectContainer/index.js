import React from 'react'
import ProjectList from '../ProjectList'
import * as S from './styles'
import {
    Link
} from "react-router-dom";
const ProjectContainer = (props) => {
    let data = props.data;
    console.log(data)
    return (
        <S.ProjectContainerArea>
            <S.ProjectContainerUpperContent>
                <h3>Projects</h3>
                <Link to="/add-project">New Project</Link>
            </S.ProjectContainerUpperContent>
            <S.ProjectListContent>
                <ProjectList data={data} />
            </S.ProjectListContent>
        </S.ProjectContainerArea>
    )
}

export default ProjectContainer
