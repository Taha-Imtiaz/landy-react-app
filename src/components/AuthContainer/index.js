import React from "react";
import AuthForms from "../AuthForms";
import * as S from "./styles";

const AuthContainer = () => {
  return (
    <S.AuthContainer>
      <S.AuthContainerPageArea>
        <S.AuthContainerImage></S.AuthContainerImage>
        <S.AuthContainerForm>
          <S.AuthForm>
            <AuthForms/>
            </S.AuthForm>
        </S.AuthContainerForm>
      </S.AuthContainerPageArea>
    </S.AuthContainer>
  );
};

export default AuthContainer;
