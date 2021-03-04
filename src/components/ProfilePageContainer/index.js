import React, { useEffect } from 'react'
import ProjectContainer from '../ProjectContainer'
import SideBar from '../SideBar'
import * as S from './styles'
// import { Doughnut } from 'react-chartjs-2';

const ProfilePageContainer = (props) => {
    let data = props.data;
    console.log(data)
    console.log(data.doughnutChart)
  
    return (
        <S.ProfilePageContainer>
            <S.ProfilePageArea>
                <S.SideBar>
                    <SideBar data={data.user} />
                </S.SideBar>
                <S.ProjectArea>
                    <ProjectContainer data={data.user.projects} allData = {data}/>
                
                </S.ProjectArea>
            </S.ProfilePageArea>
        </S.ProfilePageContainer>
    )
}

export default ProfilePageContainer
