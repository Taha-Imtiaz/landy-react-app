import styled from "styled-components";

export const AppStyle = styled.div`
display:grid;
grid-template-rows: minmax(15vh, min-content) minmax(85vh, min-content);
grid-template-areas: "header"
                    "appcontent";
`
export const Header = styled.div`
grid-area: header;

`
export const AppContent = styled.div`
grid-area:appcontent;
// background-color:green;
dispaly:grid;
grid-template-rows: minmax(70vh, min-content) minmax(15vh, min-content);
grid-template-areas: "contentarea"
                    "footer";
`
export const ContentArea = styled.div`
grid-area: contentarea;
`
export const Footer = styled.div`
grid-area: footer;
`
export const AppStyleWithoutFooter = styled.div`
display:grid;
grid-template-rows: minmax(15vh, min-content) minmax(85vh, min-content);
grid-template-areas: "header"
                    "appcontentwithoutfooter";
`
export const AppContentWithoutFooter = styled.div`
grid-area: appcontentwithoutfooter;
display: grid;
grid-template-areas: "contentareawithoutfooter"
`
export const ContentAreaWithoutFooter = styled.div`
grid-area: contentareawithoutfooter;
`