import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";

const LogInForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = values;
    console.log(email, password);
  };
  return (
    <S.AuthFormContainer>
      <form onSubmit={handleSubmit}>
        <S.AuthFormArea>
          <S.LoginHeader>
            <Heading fontSize = {22} fontWeight = "bold" color = "#0a1f44" >Login</Heading>
          </S.LoginHeader>

          <S.LoginFormFields>
            <S.EmailField>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="Email"
                value={values.email || ""}
                onChange={handleChange}
              />
            </S.EmailField>
            <S.PasswordField>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
              />
            </S.PasswordField>

            <S.LoginBtn>
              <Button type="submit">
                Login
              </Button>
            </S.LoginBtn>
          </S.LoginFormFields>

          <S.FormText>
            <span>Don't have account?</span>
            <Link to="/signup">SignUp</Link>
          </S.FormText>
        </S.AuthFormArea>
      </form>
    </S.AuthFormContainer>
  );
};

export default LogInForm;
