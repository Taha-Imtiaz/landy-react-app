import { Row, Col } from "antd";
// import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import {Link } from 'react-router-dom'

import * as S from "./styles";
import Button from "../Button";
import Heading from "../Heading";

const MiddleBlock = ({ title, content, button }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // product introduction section (middle blaock)
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Heading fontSize={16} fontWeight="bold" color="#0a1f44">
                {title}
              </Heading>
              <S.Content>{content}</S.Content>
              {button ? (
                <Link to="/signup">
                <Button
                  name="submit"
                  type="submit"
                >
                  {button}
                </Button>
                </Link>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
