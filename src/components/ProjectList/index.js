import React from 'react';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import * as S from "./styles"

const ProjectList = () => {
    return (
      <S.ProjectListContainer>
        <S.ProjectListContentArea>
          <ProjectListItem/>
          <ProjectListItem/>
          <ProjectListItem/>
          <ProjectListItem/>
          <ProjectListItem/>


          </S.ProjectListContentArea> 
      </S.ProjectListContainer>
    )
}

export default ProjectList
