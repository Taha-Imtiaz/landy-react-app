import styled from "styled-components";


export const ProjectListItemContent =styled.div`
display: grid;
grid-template-rows: minmax(7vh,min-content) 1fr minmax(7vh,min-content);
border: 2px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  border-radius:0.25rem;
  
  
`
export const ProjectListItemImage = styled.div`
width:100%;
background-image: linear-gradient(rgba(0, 0 , 0, 0.9), rgba(0, 0 , 0, 0.9));
`
export const ProjectListItemDescriptionContent = styled.span`
font-size: 0.9rem !important;
padding: 1rem;
border-bottom: 2px solid rgba(0,0,0,0.1);
font-family: sans-serif;

`

export const ProjectCardIcons = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
justify-items:center;
box-shadow: 4px 4px 8px 4px #888888;
// border-radius: 3px 2px 3px 2px;
`
export const ProjectCardIconsContent =styled.p`
font-size: 0.9rem !important;
display:grid;
align-items:center;
`