import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import LogInForm from "../LogInForm";
import SignUpForm from "../SignUpForm";
import SvgIcon from "../SvgIcon";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

const AuthContainer = ({ location: { pathname } }) => {
  const history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem('saving-token')
    if (token) {
      history.push("/profile")
    }
  }, [])

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
