
import * as S from "./styles";


// reusable input field
const Input = ({ id,type, name, value, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={name}>{id}</label>
    <S.Input
    type = {type}
      spellcheck="false"
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
      value = {value}
    />
  </S.Container>
);

export default  (Input);
