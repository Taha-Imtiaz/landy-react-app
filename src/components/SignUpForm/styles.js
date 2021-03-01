import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "authformarea";

`;

export const AuthFormArea = styled.div`
  grid-area: authformarea;
  display: grid;
`;
export const SignUpHeader = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const SignUpFormFields = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 20fr 60fr 20fr;
  grid-template-areas:
    ". namefield ."
    ". emailfield ."
    ". passwordfield ."
    ". signupbtn .";
  align-items: center;
  row-gap: 0.25rem;
`;
export const NameField = styled.div`
  grid-area: namefield;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const EmailField = styled.div`
  grid-area: emailfield;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const PasswordField = styled.div`
  grid-area: passwordfield;
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
`;
export const SignUpBtn = styled.div`
 grid-area: signupbtn
`;

export const FormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;
