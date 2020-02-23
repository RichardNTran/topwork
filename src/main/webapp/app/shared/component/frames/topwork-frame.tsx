// base on mail template Dashforge theme
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import history from 'app/config/history';
import { HeaderBarContainer, ReduxLoading } from 'app/shared/component';
import { CookiesStorage } from 'app/shared/utils';
import { CookieKey, topworkPlatformRoute } from 'app/shared/constant';
import { Sider, SubSider } from 'app/shared/component/sider';

interface ITopworkFrameProps extends RouteProps {
  loadingAction?: string;
  title?: string;
}

export const TopworkFrame = ({ component: Component, loadingAction, title, ...rest }: ITopworkFrameProps) => {
  const encloseInDefaultRoute = props => {
    if (!CookiesStorage.authenticated()) {
      CookiesStorage.setCookieData(CookieKey.pastUrl, window.location.href.toString());
      history.push(topworkPlatformRoute.Login);
      return null;
    }
    let loadingRef = null;
    if (props.title) document.title = props.title;
    const { location } = props;
    return (
      <React.Fragment>
        <Sider location={location} />
        <div className="content ht-100v pd-0-f">
          <HeaderBarContainer />
          <div className="content-body pd-0">
            <div className="topwork-wrapper topwork-wrapper-two">
              <SubSider {...props} />
              <div className="topwork-content">
                <ReduxLoading
                  expectedAction={props.loadingAction}
                  ref={instance => {
                    loadingRef = instance;
                  }}
                >
                  <Component loadingRef={loadingRef} {...props} />
                </ReduxLoading>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);
  return <Route {...rest} render={props => encloseInDefaultRoute({ ...props, loadingAction, title })} />;
};

export default TopworkFrame;
