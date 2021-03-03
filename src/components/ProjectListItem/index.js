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
            <S.ProjectListItemContentContainer>
            <S.ProjectListItemContent>
                <S.ProjectListItemUpperContent>
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

                </S.ProjectListItemUpperContent>
               

                <S.ProjectCardFooter>
                    <S.ProjectCardContentHeader>
                        Target Amt
                        
                    
                    </S.ProjectCardContentHeader>
                    <S.ProjectCardContentHeader>Monthly Amt 
                      
                        </S.ProjectCardContentHeader>
                    <S.ProjectCardContentHeader>Actual Amt
                         </S.ProjectCardContentHeader>
                         <S.ProjectCardContent>

                             {data.targetAmount}
                         </S.ProjectCardContent>
                         <S.ProjectCardContent>
                               {data.monthlySavingAmount}
                         </S.ProjectCardContent>
                         <S.ProjectCardContent>
                         {data.actualAmount}

                         </S.ProjectCardContent>
                        
                </S.ProjectCardFooter>
            </S.ProjectListItemContent>
            </S.ProjectListItemContentContainer>
        </Link>
    )
}

export default ProjectListItem




