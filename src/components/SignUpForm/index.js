import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import * as S from "./styles";


const SignUpForm = () => {
    const [values, setValues] = useState({
        name:'',
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
    return (
        <S.AuthFormContainer>
    <S.AuthFormArea>
      <S.SignUpHeader>

        <h3>Create Account</h3>

      </S.SignUpHeader>
      <S.SignUpFormFields>
      <S.NameField>
          <Input
            type="text"
            name="name"
            id="Name"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange} />
        </S.NameField>
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
      </S.SignUpFormFields>
      <S.SignUpBtn>
        <S.SignUpBtnArea>
          <Button width = "100%">Sign Up</Button>
          </S.SignUpBtnArea>
      </S.SignUpBtn>
      <S.FormText>
        <span>
          Already have an account? </span>
        <Link to="/signin">
            Login
        </Link>
       
      </S.FormText>
    </S.AuthFormArea>
  </S.AuthFormContainer>
    )
}

export default SignUpForm
