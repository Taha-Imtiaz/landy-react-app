
import * as S from "./styles";


// reusable input field
const Input = ({ id,type, name, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={name}>{id}</label>
    <S.Input
    type = {type}
      spellcheck="false"
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  </S.Container>
);

export default  (Input);
