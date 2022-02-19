import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ROUTER_CONFIG from './routerConfig';

const Routes = () => {
  return (
    <>
      <ScrollToTop />

      <Switch>
        {ROUTER_CONFIG.map(({ path, component: Component, exact }) => {
          return (
            <Route exact={exact} path={path} key={path}>
              <Component />
            </Route>
          );
        })}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
