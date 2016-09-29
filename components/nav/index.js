import React from 'react';
import './index.less';

const Navigation = (props) => (
  <nav className="navigation">
    <ul>
    {props.navlist.map((item, index) =>
      <li key={index}><a href={item.linkTo}>{item.title}</a></li>
    )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  navlist: React.PropTypes.array.isRequired
};

Navigation.defaultProps = {
  navlist: [
    {
      linkTo: 'http://google.com',
      title: 'Google'
    }, {
      linkTo: 'http://yahoo.com',
      title: 'Yahoo'
    },
  ]
};

export default Navigation;
