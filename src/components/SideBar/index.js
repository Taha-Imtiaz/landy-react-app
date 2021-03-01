import React from 'react'
import SvgIcon from '../SvgIcon'
import * as S from "./styles"

const SideBar = () => {
    return (
        <S.UserInfo>
            <S.UserInfoDetail>
                <S.UserImage>
                    <SvgIcon width= "85%" src = "cardImage.jpg"/>
                </S.UserImage>
               <S.UserInfoDescription>
                <S.UserDescriptionRow><S.RowItem>UserName :</S.RowItem>
                    <S.RowItem>xxx</S.RowItem></S.UserDescriptionRow>

               <S.UserDescriptionRow> <S.RowItem>UserEmail : </S.RowItem>
                <S.RowItem> xxx@hotmail.com</S.RowItem></S.UserDescriptionRow>

              <S.UserDescriptionRow>
              <S.RowItem>UserId : </S.RowItem>
                <S.RowItem> 123456789</S.RowItem>
              </S.UserDescriptionRow>


            </S.UserInfoDescription>
            </S.UserInfoDetail>
           

        </S.UserInfo>
    )
}

export default SideBar
