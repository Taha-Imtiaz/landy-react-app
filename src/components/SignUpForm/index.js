import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const history = useHistory();
 

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
  let validate = () => {
    if (!values.name || !values.email || !values.password) {
      return false;
    }
    return true;
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = values;
    if (validate()) {
      axios
        .post( {
          ...values,
        })
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem('saving-token', res.data.token)
            history.push("/profile")
          }
          toast(res.data.message);
          // setShouldSubmit(true);
        }).catch((e) => {
        });
    } else {
      toast("Please fill the valid values.");
    }
  };

  return (
    <S.AuthFormContainer>
      <ToastContainer />
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
