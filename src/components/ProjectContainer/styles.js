import styled from "styled-components"

export const ProjectContainerArea = styled.div`
display: grid;
grid-template-rows: 5vh minmax(30vh,min-content) 1fr;
grid-template-areas: "."
                    "projectcontaineruppercontent"
                    "projectlistcontent"



`
export const ProjectContainerUpperContent = styled.div`
grid-area: projectcontaineruppercontent;
display: grid;
grid-template-columns: 60vw;
align-items:center;
justify-content: center;
`
export const ProjectListContent = styled.div`
grid-area: projectlistcontent;
display: grid;
width: 100%;
height: 100%;
`