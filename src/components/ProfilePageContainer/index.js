import React from 'react'
import ProjectContainer from '../ProjectContainer'
import SideBar from '../SideBar'
import * as S from './styles'
const ProfilePageContainer = (props) => {
    let data = props.data;
    return (
        <S.ProfilePageContainer>
            <S.ProfilePageArea>
                <S.SideBar>
                    <SideBar data={data.user} />
                </S.SideBar>
                <S.ProjectArea>
                    <ProjectContainer data={data.user.projects} />
                </S.ProjectArea>
            </S.ProfilePageArea>
        </S.ProfilePageContainer>
    )
}

export default ProfilePageContainer
