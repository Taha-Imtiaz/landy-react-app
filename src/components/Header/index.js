import { useState, Fragment } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
// import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import * as S from "./styles";
import Button from "../Button";
import SvgIcon from "../SvgIcon";

const Header = () => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location.pathname)
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    const logOut = () => {
      localStorage.clear();
      history.push("/")
    }
    return (
      <Fragment>
        {location.pathname === '/' ? <span>
          <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
            <S.Span>{"About"}</S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
            <S.Span>{"Mission"}</S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall
            style={{ width: "180px" }}
            onClick={() => history.push("/signin")}
          >
            <S.Span>
              <Button>{"Log In"}</Button>
            </S.Span>
          </S.CustomNavLinkSmall>
        </span> : null
        }
        {localStorage.getItem('saving-token') ? <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => logOut()}>
          <S.Span>
            <Button>{"Log Out"}</Button>
          </S.Span>
        </S.CustomNavLinkSmall> : null}

      </Fragment >
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            {/* <SvgIcon src="logo.svg" /> */}
            <img src='/img/logo.png' width="80px" />
          </S.LogoContainer>
          <S.NotHidden>
            {/* show nav on a large screen */}
            <MenuItem />
          </S.NotHidden>

          {/* hamburger icon */}
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>

        {/* responsive nav for small screens */}
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col 
            style={{ marginBottom: "2.5rem" }}
            >
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12} >
                  <S.Outline  padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default Header;
