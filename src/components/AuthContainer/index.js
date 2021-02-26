import React from "react";
import { withRouter } from "react-router-dom";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import * as S from "./styles";

const AuthContainer = ({location:{pathname}}) => {
  console.log(pathname)
  return (
    <S.AuthContainer>
      <S.AuthContainerPageArea>
        <S.AuthContainerImage></S.AuthContainerImage>
        <S.AuthContainerForm>
          <S.AuthForm>
        {pathname === `/signin`? <LogInForm/> : <SignUpForm/>}
            </S.AuthForm>
        </S.AuthContainerForm>
      </S.AuthContainerPageArea>
    </S.AuthContainer>
  );
};

export default withRouter(AuthContainer);
