import styled from "styled-components";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(85vh, min-content);
  grid-template-columns: 5fr 90fr 5fr;
  grid-template-areas: ". authContainerPageArea .";

  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-rows: minmax(100vh, min-content);
    grid-template-columns: 5fr 90fr 5fr;
    grid-template-areas: ". authContainerPageArea .";
  }
`;
export const AuthContainerPageArea = styled.div`
  grid-area: authContainerPageArea;
  display: grid;
  grid-template-columns: 35fr 65fr;
  grid-template-areas: "authContainerImage authContainerForm";

  @media only screen and (max-width: 1000px) {
    grid-area: authContainerPageArea;
    display: grid;
    grid-template-rows: minmax(30vh, min-content) minmax(70vh, min-content);
    grid-template-columns: 1fr;
    grid-template-areas:
      "authContainerImage"
      "authContainerForm";
      row-gap: 5em;
      
  }
`;
export const AuthContainerImage = styled.div`
  grid-area: authContainerImage;
  border-radius: 0.15rem;
`;
export const AuthContainerForm = styled.div`
  grid-area: authContainerForm;
  border-radius: 0.15rem;
  display: grid;
  grid-template-rows: minmax(10vh, min-content) minmax(65vh, min-content) minmax(
      10vh,
      min-content
    );
  grid-template-areas:
    "."
    "authForm"
    ".";
`;
export const AuthForm = styled.div`
  grid-area: authForm;
`;
