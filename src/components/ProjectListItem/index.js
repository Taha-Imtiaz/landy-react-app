import React from 'react'
import SvgIcon from '../SvgIcon'
import * as S from "./styles"
import {
    Link
} from "react-router-dom";
import Paragraph from '../Paragraph';
const ProjectListItem = (props) => {
    let data = props.data;
    return (
        <Link to={`/project-detail/${data._id}`}>
            <S.ProjectListItemContent>
                <S.ProjectListItemImage>
                    <S.ProjectPic src={data.image}>

                    </S.ProjectPic>
                    {/* <SvgIcon width = "100%" src = {data.image}/> */}
                    {/* <img  width = "100%"/> */}

                </S.ProjectListItemImage>
                <S.ProjectListItemDescriptionContent>
                    {data.name}
                </S.ProjectListItemDescriptionContent>
                <S.ProjectStatusInfo>

                    <Paragraph fontSize = {10}> {data.status}</Paragraph>

                    <Paragraph fontSize = {10}>{new Date(data.targetDate).toDateString()}</Paragraph> 
                </S.ProjectStatusInfo>

                <S.ProjectCardIcons>
                    <S.ProjectCardIconsContent>Target Amount: {data.targetAmount}</S.ProjectCardIconsContent>
                    <S.ProjectCardIconsContent>Monthly Saving Amount: {data.monthlySavingAmount}</S.ProjectCardIconsContent>
                    <S.ProjectCardIconsContent>Actual Amount: {data.actualAmount}</S.ProjectCardIconsContent>
                </S.ProjectCardIcons>
            </S.ProjectListItemContent>
        </Link>
    )
}

export default ProjectListItem
