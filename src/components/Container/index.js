import * as S from "./styles";

const Container = ({ padding, border, children }) => (
  // null
  <S.Container padding={padding} border={border}>
    {children}
  </S.Container>
);

export default Container;
