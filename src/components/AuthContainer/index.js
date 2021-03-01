import React from "react";
import { withRouter } from "react-router-dom";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import SvgIcon from "../SvgIcon";
import * as S from "./styles";

const AuthContainer = ({ location: { pathname } }) => {
  console.log(pathname);
  return (
    <S.AuthContainer>
      <S.AuthContainerPageArea>
        <S.AuthContainerImage>
          <SvgIcon src="charts.png" width="100%" height="100%" />
        </S.AuthContainerImage>
        <S.AuthContainerForm>
          <S.AuthForm>
            {pathname === `/signin` ? <LogInForm /> : <SignUpForm />}
          </S.AuthForm>
        </S.AuthContainerForm>
      </S.AuthContainerPageArea>
    </S.AuthContainer>
  );
};

export default withRouter(AuthContainer);
