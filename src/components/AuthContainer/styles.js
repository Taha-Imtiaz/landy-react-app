import styled from "styled-components";

export const AuthContainer = styled.div`
display: grid;
grid-template-rows: minmax(80vh, min-content);
grid-template-columns: 7.5fr 85fr 7.5fr;
grid-template-areas: ". authContainerPageArea .";


`
export const AuthContainerPageArea = styled.div`
grid-area: authContainerPageArea;
display:grid;
grid-template-columns: 35fr 65fr;
grid-template-areas: "authContainerImage authContainerForm";


`
export const AuthContainerImage = styled.div`
grid-area: authContainerImage;
background: #2e186a;
border-radius:0.15rem;
`
export const AuthContainerForm = styled.div`
grid-area: authContainerForm;
background:red;
border-radius:0.15rem;
display:grid;
grid-template-rows: 17.5fr 65fr 17.5fr;
grid-template-areas:"."
                    "authForm"
                    ".";
`
export const AuthForm = styled.div `
grid-area:authForm;
background:orange;
`