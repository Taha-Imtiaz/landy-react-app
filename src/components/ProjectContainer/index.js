import React from 'react'
import Paragraph from '../Paragraph'
import ProjectList from '../ProjectList'
import * as S from './styles'
import {
    Link
} from "react-router-dom";
import Button from '../Button';
const ProjectContainer = (props) => {
    let data = props.data;
    console.log(data)
    return (
        <S.ProjectContainerArea>
            <S.ProjectContainerUpperContent>
                <h3>Projects</h3>
                <Link to="/add-project">
               <Button> New Project</Button>
               </Link>
            </S.ProjectContainerUpperContent>
            <S.ProjectListContent>
                <ProjectList data={data} />
            </S.ProjectListContent>
        </S.ProjectContainerArea>
    )
}

export default ProjectContainer
