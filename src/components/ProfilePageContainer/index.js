import React from 'react'
import ProjectContainer from '../ProjectContainer'
import SideBar from '../SideBar'
import * as S from './styles'
const ProfilePageContainer = () => {
    return (
        <S.ProfilePageContainer>
            <S.ProfilePageArea>
                <S.SideBar>
                    <SideBar />
                </S.SideBar>
                <S.ProjectArea>
                    <ProjectContainer/>
                </S.ProjectArea>
            </S.ProfilePageArea>
        </S.ProfilePageContainer>
    )
}

export default ProfilePageContainer
