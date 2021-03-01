import * as S from "./styles";

const Button = ({ color, width, children, onClick , type  }) => (
  // Reusable button component
  <S.Button type = {type} color={color} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
