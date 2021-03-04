import React, { useEffect } from 'react'
import ProjectContainer from '../ProjectContainer'
import SideBar from '../SideBar'
import * as S from './styles'
// import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js';

const ProfilePageContainer = (props) => {
    let data = props.data;
    console.log(data.doughnutChart)
    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "doughnut",
            data: data.doughnutChart
        });
    }, [])
    return (
        <S.ProfilePageContainer>
            <S.ProfilePageArea>
                <S.SideBar>
                    <SideBar data={data.user} />
                </S.SideBar>
                <S.ProjectArea>
                    <ProjectContainer data={data.user.projects} />
                    <canvas id="myChart" width="200" height="200"></canvas>
                </S.ProjectArea>
            </S.ProfilePageArea>
        </S.ProfilePageContainer>
    )
}

export default ProfilePageContainer
