import styled from "styled-components";

export const UserInfo = styled.div`
display: grid;
width:100%;
height:100%;
grid-template-rows: 15vh 1fr;
grid-template-areas:"."
                     "userinfoDetail";
                    

border-radius: 0.35rem;
`

export const UserInfoDetail = styled.div`
grid-area: userinfoDetail;
background-color: #2e186a;
display:grid;
grid-template-rows: minmax(20vh,min-content) 1fr;
grid-template-areas: "userpic"
                    "userinfodescription"; 
    row-gap: 5rem;
    position:relative;
`
export const UserImage = styled.div`
grid-area: userpic;
position:absolute;
transform: translate(7.5%,-40%);
`
export const UserInfoDescription = styled.div`
grid-area: userinfodescription;
display:grid;
grid-template-rows: repeat(auto-fit,minmax(min-content, 7vh));


// background:red;
`
export const UserDescriptionRow = styled.div`
display:grid;
grid-template-columns: 40fr 60fr;
font-family:sans-serif;
padding-left: 2rem;
align-items:center;

`
export const RowItem = styled.p`
color: #fff;
font-family: sans-serif;
`
