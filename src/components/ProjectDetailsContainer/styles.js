import styled from "styled-components";

export const ProjectDetailsContainer = styled.div`
display: grid;
grid-template-columns: 5fr 90fr 5fr;
grid-template-areas: ". projectdetailcontainerarea .";

`
export const ProjectDetailsContainerArea = styled.div`

grid-area: projectdetailcontainerarea;
display: grid;
grid-template-rows: 10vh 1fr;
row-gap: 2rem;
`
export const ProjectDetailsContainerUpperArea = styled.div`
display: grid;
grid-template-columns: 90fr 10fr;
align-items: center;
`