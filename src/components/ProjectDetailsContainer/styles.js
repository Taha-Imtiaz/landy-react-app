import styled from "styled-components";

export const ProjectDetailsContainer = styled.div`
display: grid;
grid-template-rows: minmax(85vh, min-content);
grid-template-columns: 5fr 90fr 5fr;
grid-template-areas: ". projectdetailcontainerarea .";

`
export const ProjectDetailsContainerArea = styled.div`
grid-area: projectdetailcontainerarea;
display: grid;
grid-template-rows: 10vh 1fr;
grid-template-columns: 1fr;
grid-template-areas: "projectdetailscontainerupperarea"
                    "projectdetailscontainerlowerarea";
row-gap: 2rem;

`
export const ProjectDetailsContainerUpperArea = styled.div`
grid-area: projectdetailscontainerupperarea;
display: grid;
grid-template-columns: 1fr;
align-items: center;
`
export const ProjectDetailsContainerLowerArea = styled.div`
grid-area: projectdetailscontainerlowerarea;
display: grid;
grid-template-rows:  1fr minmax(10vh,min-content);
grid-template-columns: 1fr;
row-gap: 3rem;
padding-bottom: 1rem;
`
export const ProjectInfoContainer = styled.div`
display: grid;
grid-template-rows:  minmax(80vh,min-content);
grid-template-columns: 60fr 30fr;
column-gap: 2rem;
@media only screen and (max-width: 1000px) {
    display: grid;
grid-template-rows:  minmax(60vh,min-content) minmax(40vh,min-content);
grid-template-columns:1fr;
row-gap: 2rem;
}
`

export const ProjectInfoCard = styled.div`
display: grid;
grid-template-columns: 1fr;
`

// remaining card css here

export const ProjectOwnerInfo = styled.div`
display: grid;
grid-template-columns: 1fr;
// grid-template-rows: minmax(30vh,min-content) minmax(10vh,min-content);
// grid-template-areas: "ownerinfocontent"
//                          "addownerbtn";
grid-auto-rows: 15vh;
row-gap: 2rem;


`
export const AddOwnerBtn = styled.div`
display: grid;
grid-template-columns: 70fr 30fr;
align-items: center;
@media only screen and (max-width: 500px) {
    display: grid;
grid-template-columns: 60fr 40fr;
align-items: center;

}
`

export const ProjectOwnerInfoContent = styled.div`
// grid-area: ownerinfocontent;
display: grid;
grid-template-rows: repeat(auto-fit, minmax(8vh,min-content));
grid-template-columns: .2fr .8fr;

//  grid-template-areas: "ownerimage ownername";
column-gap:2rem;
border-bottom 1px solid #a8a8a8;
`

export const ProjectOwnerImage = styled.div`
// grid-area: ownerimage;
display: grid;
align-items: center;
// grid-row: 1/span 2;
`
export const ImageArea = styled.img`
width:8vh;
height:8vh;
border-radius: 50%;

`
export const ProjectOwnerName = styled.div`
// grid-area:ownername;
display:grid;

`

export const ProjectDetailsContainerButtons = styled.div`
display: grid;
grid-template-columns: 30fr 40fr 30fr;
grid-template-areas: ". projectdetailscontainerbuttonsarea .";
@media only screen and (max-width: 500px) {
    display: grid;
grid-template-columns: 15fr 70fr 15fr;
grid-template-areas: ". projectdetailscontainerbuttonsarea .";

}
`
export const ProjectDetailsContainerButtonsArea = styled.div`
grid-area: projectdetailscontainerbuttonsarea;
display: grid;
grid-template-columns: repeat(3,1fr);
column-gap:0.5rem;
`