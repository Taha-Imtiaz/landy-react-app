import React from 'react'
import SvgIcon from '../SvgIcon'
import * as S from "./styles"

const ProjectListItem = () => {
    return (
       
            <S.ProjectListItemContent>
                 <S.ProjectListItemImage>
                 <SvgIcon width = "100%" src = "cardImage.jpg"/>
                 </S.ProjectListItemImage>
                <S.ProjectListItemDescriptionContent>
                   
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, temporibus libero error quis, illum eveniet autem voluptate obcaecati commodi esse ipsam aspernatur accusamus ipsa assumenda sint mollitia accusantium quae impedit.
                  
                </S.ProjectListItemDescriptionContent>
                <S.ProjectCardIcons>
                    <S.ProjectCardIconsContent>abc</S.ProjectCardIconsContent>
                    <S.ProjectCardIconsContent>abc</S.ProjectCardIconsContent>
                    <S.ProjectCardIconsContent>abc</S.ProjectCardIconsContent>
                </S.ProjectCardIcons>
            </S.ProjectListItemContent>
          
      
    )
}

export default ProjectListItem
