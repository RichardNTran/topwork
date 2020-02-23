import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SiderContainer } from './sider-container';
import { Icon } from 'app/shared/component';
import { asideJquery, customJquery } from 'app/shared/jquery';
import { topworkPlatformRoute } from 'app/shared/constant';

const logoTopwork = 'content/images/logos/logo-aside.svg';
interface ISiderProps {
  location: object;
}
class Sider extends Component<ISiderProps> {
  componentDidMount() {
    asideJquery();
    customJquery();
  }

  render() {
    const { location } = this.props;
    return (
      <aside className="aside aside-fixed aside-topwork minimize">
        <div className="aside-header">
          <Link to={topworkPlatformRoute.Home} className="aside-logo">
            <img src={logoTopwork} className="logo" alt="Topwork" height="40" />
          </Link>
          <div className="aside-menu-link">
            <Icon icon="menu" />
            <Icon icon="x" />
          </div>
          {/* <div id="topworkMenu" className="burger-menu d-lg-none">
            <Icon icon="arrow-left" />
          </div> */}
        </div>
        <div className="aside-body">
          <SiderContainer location={location} />
        </div>
      </aside>
    );
  }
}
export { Sider };
