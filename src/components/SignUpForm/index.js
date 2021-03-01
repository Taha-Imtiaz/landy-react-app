import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";

const SignUpForm = () => {
  const [values, setValues] = useState({
    name: "",
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
    let { name, email, password } = values;
    console.log(name, email, password);
  };
  return (
    <S.AuthFormContainer>
      <form onSubmit={handleSubmit}>
        <S.AuthFormArea>
          <S.SignUpHeader>
            <Heading fontSize = {22} fontWeight = "bold" color = "#0a1f44" >Create Account</Heading>
          </S.SignUpHeader>
          <S.SignUpFormFields>
            <S.NameField>
              <Input
                type="text"
                name="name"
                id="Name"
                placeholder="Name"
                value={values.name || ""}
                onChange={handleChange}
              />
            </S.NameField>
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

            <S.SignUpBtn>
              <Button type="submit">
                Sign Up
              </Button>
            </S.SignUpBtn>
          </S.SignUpFormFields>
          <S.FormText>
            <span>Already have an account? </span>
            <Link to="/signin">Login</Link>
          </S.FormText>{" "}
        </S.AuthFormArea>{" "}
      </form>
    </S.AuthFormContainer>
  );
};

export default SignUpForm;
