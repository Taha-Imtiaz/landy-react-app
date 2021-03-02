import React from 'react';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import * as S from "./styles"

const ProjectList = (props) => {
  let data = props.data;
  return (
    <S.ProjectListContainer>
      <S.ProjectListContentArea>
        {data.map((x, i) => <ProjectListItem key = {i} data = {x}/>)}
      </S.ProjectListContentArea>
    </S.ProjectListContainer>
  )
}

export default ProjectList
