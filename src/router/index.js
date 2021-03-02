import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import routes from "./config";
import GlobalStyles from "../globalStyles";
import * as S from "./styles";


const Router = () => {
  const location = useLocation();
  let { pathname } = location;
  console.log(pathname)
  return (
    <Suspense fallback={null}>

      <GlobalStyles />
      {pathname !== '/signin' && pathname !== '/signup' && pathname !== '/profile' ? 
        <S.AppStyle>
          <S.Header>
            <Header />
          </S.Header>
          <S.AppContent>
            <S.ContentArea>
              <Switch>
                {routes.map((routeItem) => {
                  return (
                    <Route
                      key={routeItem.component}
                      path={routeItem.path}
                      exact={routeItem.exact}
                      component={lazy(() => import(`../pages/${routeItem.component}`))}
                    />
                  );
                })}
              </Switch>
            </S.ContentArea>
            <S.Footer>
              <Footer />
            </S.Footer>
          </S.AppContent>
        </S.AppStyle> : <S.AppStyleWithoutFooter>
          <S.Header>
            <Header />
          </S.Header>
          <S.AppContentWithoutFooter>
            <S.ContentAreaWithoutFooter>
            <Switch>
                {routes.map((routeItem) => {
                  return (
                    <Route
                      key={routeItem.component}
                      path={routeItem.path}
                      exact={routeItem.exact}
                      component={lazy(() => import(`../pages/${routeItem.component}`))}
                    />
                  );
                })}
              </Switch>  
            </S.ContentAreaWithoutFooter>
          </S.AppContentWithoutFooter>
        </S.AppStyleWithoutFooter>}
    </Suspense>
  );
};

export default Router;
