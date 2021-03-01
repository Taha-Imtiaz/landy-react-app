import styled from "styled-components";

export const ProjectListContainer = styled.div`
display: grid;
grid-template-columns: 60vw;
justify-content: center;

`
export const ProjectListContentArea = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 60px 20px;

`