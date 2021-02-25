// import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Block = ({ title, content }) => {

  return (
    // null
    //  left section of contact form
    <S.Container>
      <Fade left>
        <h6>{title}</h6>
        <S.TextWrapper>
          <S.Content>{content}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default  (Block);
