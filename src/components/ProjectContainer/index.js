import React from 'react'
import Paragraph from '../Paragraph'
import ProjectList from '../ProjectList'
import * as S from './styles'
import {
    Link
} from "react-router-dom";
import Button from '../Button';
import { useEffect } from 'react';
import Chart from 'chart.js';


const ProjectContainer = ({data, allData}) => {
    console.log(allData, `project container`)

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
            type: "doughnut",
            data: allData.doughnutChart
        });
    }, [])


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
            <S.ProjectChartArea>    <canvas id="myChart" width = "100%" height = "40%"></canvas></S.ProjectChartArea>
        </S.ProjectContainerArea>
    )
}

export default ProjectContainer
