import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styles";

const LogInForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',

  })
  let handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }
  return <S.AuthFormContainer>
    <S.AuthFormArea>
      <S.LoginHeader>

        <h3>Login</h3>

      </S.LoginHeader>
      <S.LoginFormFields>
        <S.EmailField>
          <Input
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange} />
        </S.EmailField>
        <S.PasswordField>

          <Input
            type="password"
            name="password"
            id="Password"
            placeholder="Password"
            value={values.password || ""}
            onChange={handleChange} />
        </S.PasswordField>
      </S.LoginFormFields>
      <S.LoginBtn>
        <S.LoginBtnArea>
          <Button width="100%">Login</Button>
        </S.LoginBtnArea>
      </S.LoginBtn>
      <S.FormText>
        <span>
          Don't have account?</span>
        <Link to="/signup">
            SignUp
        </Link>
        
      </S.FormText>
    </S.AuthFormArea>
  </S.AuthFormContainer>
};

export default LogInForm;
