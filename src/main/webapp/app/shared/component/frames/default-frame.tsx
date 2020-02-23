import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import history from 'app/config/history';
import { Sider } from 'app/shared/component/sider';
import { HeaderBarContainer, LoadingWraper } from 'app/shared/component';
import { CookiesStorage } from 'app/shared/utils';
import { CookieKey, topworkPlatformRoute } from 'app/shared/constant';

interface IUserProps extends RouteProps {
  loadingAction?: string;
  title?: string;
}
export const DefaultFrame = ({ component: Component, loadingAction, title, ...rest }: IUserProps) => {
  const encloseInDefaultRoute = props => {
    if (props.title) document.title = props.title;
    if (!CookiesStorage.authenticated()) {
      CookiesStorage.setCookieData(CookieKey.pastUrl, window.location.href.toString());
      history.push(topworkPlatformRoute.Login);
      return null;
    }
    return (
      <React.Fragment>
        <Sider location={props.location} />
        <div className="content ht-100v pd-0">
          <HeaderBarContainer />
          <div className="content-body">
            <LoadingWraper>
              <Component {...props} />
            </LoadingWraper>
          </div>
        </div>
      </React.Fragment>
    );
  };

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  return <Route {...rest} render={props => encloseInDefaultRoute({ ...props, loadingAction, title })} />;
};

export default DefaultFrame;
