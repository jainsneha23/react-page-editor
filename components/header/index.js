import React from 'react';

const Header = (props) => (
  <header>
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
  logosrc: '',
  logoalt: 'Logo',
  title: 'Site Title',
  subtitle: 'Subtitle goes here'
};

export default Header;
