import * as S from "./styles";

const Button = ({ color, width, children, onClick , type, style= {}  }) => (
  // Reusable button component
  <S.Button style= {{...style}} type = {type} color={color} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
