import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BasicLayout from '../Layout/BasicLayout';
import configRouter from './configRouter';

const AppRouter = () => {
  return ( 
    <Router>
      <BasicLayout>
        <Switch>
          {
            configRouter.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} >
                <route.component />
              </Route>
            ))
          }
          <Redirect to='/home' />
        </Switch>
      </BasicLayout>
    </Router>
  );
}
 
export default AppRouter;