import styled from "styled-components";

export const AddProjectFormContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(85vh, min-content);
  grid-template-areas: "addprojectformarea";
`;
export const AddProjectFormArea = styled.div`
  grid-area: addprojectformarea;
  display: grid;
  grid-template-rows: 7.5vh minmax(70vh, min-content) 7.5vh;
  grid-template-columns: 1fr;
  grid-template-areas:
    "."
    "addprojectformcontent"
    ".";
`;
export const AddProjectFormContent = styled.div`
  grid-area: addprojectformcontent;
  display: grid;
  grid-template-rows: 10vh 60vh;


`;
export const AddProjectFormHeader = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const AddProjectFormFields = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 12vh);
  grid-template-columns: 25fr 50fr 25fr;
  grid-template-areas:
    ". projectnamefield ."
    ". monthlysavingamount ."
    ". targetamount ."
    ". targetdate . "
    ". loginbtn . ";
  row-gap: 0.25rem;
`;
export const ProjectNameField = styled.div`
  grid-area: projectnamefield;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const MonthlySavingAmount = styled.div`
  grid-area: monthlysavingamount;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const TargetAmount = styled.div`
  grid-area: targetamount;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const TargetDate = styled.div`
  grid-area: targetdate;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const LoginBtn = styled.div`
  grid-area: loginbtn;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;