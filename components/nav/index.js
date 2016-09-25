import React from 'react';

const Navigation = (props) => (
  <nav>
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
