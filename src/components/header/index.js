import React from 'react';
import './index.less';

const Header = (props) => (
  <header className="header">
    <img src={props.logosrc} alt={props.logoalt} />
    <span>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </span>
  </header>
);

Header.propTypes = {
  logosrc: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  logoalt: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  logosrc: 'http://carve.ph/wp-content/uploads/2014/12/Google-Web-Design.png',
  logoalt: 'Logo',
  title: 'Site Title',
  subtitle: 'Sub Title goes here'
};

export default Header;
