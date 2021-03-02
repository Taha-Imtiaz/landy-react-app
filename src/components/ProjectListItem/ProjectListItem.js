import React from 'react'
import SvgIcon from '../SvgIcon'
import * as S from "./styles"
import {
    Link
} from "react-router-dom";
const ProjectListItem = (props) => {
    let data = props.data;
    return (
        <Link to={`/project-detail/${data._id}`}>
            <S.ProjectListItemContent>
                <S.ProjectListItemImage>
                    {/* <SvgIcon width = "100%" src = {data.image}/> */}
                    <img src={data.image} />
                </S.ProjectListItemImage>
                <S.ProjectListItemDescriptionContent>
                    {data.name}
                </S.ProjectListItemDescriptionContent>
                {data.status}
                {new Date(data.targetDate).toDateString()}
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
