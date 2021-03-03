import styled from "styled-components";

export const ProjectInfoCardArea = styled.div`
display: grid;
grid-template-rows:1fr;
grid-template-columns: 1fr;
grid-template-areas: "projectinfocardcontentarea";
width: 100%;
height: 100%;
border: 2px solid #ccc;
box-shadow:  2px 2px 10px 0px  rgba(0,0,0,0.3);
border-radius:0.25rem;
`
export const ProjectInfoCardContentArea = styled.div`
grid-area: projectinfocardcontentarea;
display: grid;
grid-template-rows: 20vh  minmax(40vh, min-content) minmax(10vh, min-content);
grid-template-columns: 35vw;
justify-content:center;
padding: 1rem 0;
`
export const ProjectImageArea = styled.div`
display: grid;
justify-items:center;
`
export const ProjectImg = styled.img`
width: 20vh;
height: 20vh;
background-size: 100% 100%, cover;

border-radius: 50%;

`
export const ProjectInfoCardContentAreaInput = styled.div`
display: grid;
grid-template-rows:1fr;
grid-template-columns: 1fr;
row-gap: 0.5rem;
`
export const ProjectInfoCardEditBtn = styled.div`
display: grid;
grid-template-rows:1fr;
grid-template-columns: 1fr;
`