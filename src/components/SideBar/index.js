import React from 'react'
import SvgIcon from '../SvgIcon'
import * as S from "./styles"

const SideBar = (props) => {
    let data = props.data;
    return (
        <S.UserInfo>
            <S.UserInfoDetail>
                <S.UserImage>
                    {/* <SvgIcon width="85%" src="" /> */}
                    <img width="50%" src="https://res.cloudinary.com/dz8zgvu8s/image/upload/v1570542639/user1.jpg" />

                </S.UserImage>
                <S.UserInfoDescription>
                    <S.UserDescriptionRow><S.RowItem>Name :</S.RowItem>
                        <S.RowItem>{data.name}</S.RowItem></S.UserDescriptionRow>

                    <S.UserDescriptionRow> <S.RowItem>Email : </S.RowItem>
                        <S.RowItem> {data.email}</S.RowItem></S.UserDescriptionRow>

                    <S.UserDescriptionRow>
                        <S.RowItem>Joined : </S.RowItem>
                        <S.RowItem> {new Date(data.createdAt).toDateString()}</S.RowItem>
                    </S.UserDescriptionRow>


                </S.UserInfoDescription>
            </S.UserInfoDetail>


        </S.UserInfo>
    )
}

export default SideBar
