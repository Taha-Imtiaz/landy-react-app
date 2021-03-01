import React from "react";
import * as S from "./styles"

const fontWeightEstimator = (weightStr) => {
  switch (weightStr) {
    case "light":
      return 300;

    case "regular":
      return 400;

    case "semiBold":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
};

const Heading = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  color = "black",
  style = {},
  ...restProps
}) => {
  let fontWeightValue = fontWeightEstimator(fontWeight);
  let fontSizeValue = fontSize / 10;

  return (
    <S.HeadingComponent
      {...restProps}
      style={{
        fontWeight: fontWeightValue,
        fontSize: `${fontSizeValue}em`,
        color,
        ...style,
      }}
    >
      {children}
    </S.HeadingComponent>
  );
};

export default Heading;
