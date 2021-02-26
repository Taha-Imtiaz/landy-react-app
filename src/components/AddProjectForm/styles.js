import styled from "styled-components";

export const AddProjectFormContainer =styled.div`
display:grid;
grid-template-rows: minmax(70vh,min-content);
background:limegreen;
grid-template-areas: "addprojectformarea";
`
export const AddProjectFormArea = styled.div`
grid-area:addprojectformarea;
display:grid;
grid-template-rows: 10vh minmax(50vh,min-content) 10vh;
grid-template-columns:1fr;
grid-template-areas: "."
                    "addprojectformcontent"
                    ".";

`
export const AddProjectFormContent = styled.div`
grid-area: addprojectformcontent;
background:lightslategray;
display:grid;
grid-template-rows: 10vh  minmax(40vh, min-content);

`
export const AddProjectFormHeader = styled.div`
display: grid;
justify-items:center;
align-items:center;
`
export const AddProjectFormFields= styled.div`
display:grid;
grid-template-rows: repeat(4, minmax(10vh, min-content);
grid-template-columns: 20fr 60fr 20fr;
grid-template-areas: ". projectnamefield ."
                    ". monthlysavingamount ."
                        ". targetamount ."
                        ". targetdate . ";
align-items:center;
row-gap:0.25rem;
`
export const ProjectNameField = styled.div`
grid-area: projectnamefield;
display:grid;
grid-template-rows:1fr;
height:100%;
`