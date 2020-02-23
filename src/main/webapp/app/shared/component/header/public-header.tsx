import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from 'app/shared/component';

const logoTopwork = 'content/images/logos/logo-menu.svg';

const HeaderPublicContainer = props => {
  const { containerClass } = props;
  return (
    <div className={`content-header pd-l-15 ${containerClass || ''}`}>
      <div className="logo-container">
        <a href="/" className="aside-logo">
          <img src={logoTopwork} className="logo" alt="Topwork" height="40" />
        </a>
      </div>
      <nav className="nav">
        <NavLink className="nav-link" to="#">
          <Icon icon="grid" />
        </NavLink>
      </nav>
    </div>
  );
};

export { HeaderPublicContainer };
