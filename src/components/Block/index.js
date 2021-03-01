// import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Heading from "../Heading";

import * as S from "./styles";

const Block = ({ title, content }) => {
  return (
    // null
    //  left section of contact form
    <S.Container>
      <Fade left>
        <Heading fontSize={16} fontWeight="bold" color="#0a1f44">
          {title}
        </Heading>
        <S.TextWrapper>
          <S.Content>{content}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default Block;
