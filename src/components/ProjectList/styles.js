import styled from "styled-components";

export const ProjectListContainer = styled.div`
display: grid;
grid-template-columns: 60vw;
justify-content: center;
// background:limegreen;

@media only screen and (max-width:1000px) {
  display: grid;
grid-template-columns: 90vw;
justify-content: center;
}
@media only screen and (max-width:750px) {
  display: grid;
grid-template-columns: 80fr;
// justify-content: center;
align-content: start;
}
`


export const ProjectListContentArea = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
  grid-gap: 60px 20px;

  @media only screen and (max-width:750px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem,1fr));
      grid-gap: 60px 20px;
    
  }
`
