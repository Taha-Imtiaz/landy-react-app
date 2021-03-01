import styled from "styled-components";

export const ProfilePageContainer = styled.div`
display: grid;
  grid-template-rows: minmax(100vh, min-content);
  grid-template-columns: 5fr 90fr 5fr;
  grid-template-areas: ". profilepagearea .";

`
export const ProfilePageArea = styled.div`
grid-area: profilepagearea;
display:grid;
grid-template-columns:25fr 75fr;
column-gap: 1rem;

`
export const SideBar = styled.div`
// background: blue;
display: grid;
width: 100%;
height: 100%;

`
export const ProjectArea = styled.div`
display: grid;
width: 100%;
height: 100%;
border-radius: 0.35rem;


`