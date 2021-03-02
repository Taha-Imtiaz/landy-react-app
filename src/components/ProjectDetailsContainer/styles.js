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
grid-template-rows:  1fr 10vh minmax(10vh,min-content);
row-gap: 3rem;
padding-bottom: 1rem;
`
export const ProjectInfoContainer = styled.div`
display: grid;
grid-template-rows: minmax(60vh,min-content);
grid-template-columns: repeat(2, 1fr);
column-gap: 0.5rem;

`
export const ProjectImg = styled.img`
width: 100%;
height: 100%;
`
export const ProjectInfoCard = styled.div`
background: lightgreen;
display: grid;
grid-template- columns: 1fr;
`

// remaining card css here

export const ProjectOwnerInfo = styled.div`
display: grid;
grid-template-columns: min-content 1fr;
grid-template-areas: "ownerimage ownername";
column-gap: 2rem;
`
export const ProjectOwnerImage = styled.div`
grid-area: ownerimage;
display: grid;

`
export const ProjectOwnerName = styled.div`
grid-area:ownername;
display:grid;
`
export const ProjectDetailsContainerButtons = styled.div`
display: grid;
grid-template-columns: 25fr 50fr 25fr;
grid-template-areas: ". projectdetailscontainerbuttonsarea .";
`
export const ProjectDetailsContainerButtonsArea = styled.div`
grid-area: projectdetailscontainerbuttonsarea;
display: grid;
grid-template-columns: repeat(3,1fr);
column-gap:0.5rem;
`