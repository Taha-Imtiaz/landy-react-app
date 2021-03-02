import styled from "styled-components"

export const ProjectContainerArea = styled.div`
display: grid;
grid-template-rows: 15vh minmax(30vh,min-content) 1fr;
grid-template-areas: "."
                    "projectcontaineruppercontent"
                    "projectlistcontent";

@media only screen and (max-width:1000px) {
    display: grid;
    grid-template-rows:  minmax(30vh,min-content) 1fr;
    grid-template-areas:   "projectcontaineruppercontent"
                            "projectlistcontent";
}

`
export const ProjectContainerUpperContent = styled.div`
grid-area: projectcontaineruppercontent;
display: grid;
grid-template-columns: 50vw 10vw;
align-items:center;
justify-content: center;

@media only screen and (max-width:1000px) {
    grid-area: projectcontaineruppercontent;
display: grid;
grid-template-columns: 75vw 15vw;
align-items:center;
justify-content: center;
}
`
export const ProjectListContent = styled.div`
grid-area: projectlistcontent;
display: grid;
width: 100%;
height: 100%;


`