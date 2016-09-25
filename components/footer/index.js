import React from 'react';

const Footer = (props) => (
  <div>
    <ul>
    {props.footerlist.map((item, index) =>
      <li key={index}><a href={item.linkTo}>{item.title}</a></li>
    )}
    </ul>
  </div>
);

Footer.propTypes = {
  footerlist: React.PropTypes.array.isRequired
};

Footer.defaultProps = {
  footerlist: [
    {
      linkTo: 'http://google.com',
      title: 'Google'
    }, {
      linkTo: 'http://yahoo.com',
      title: 'Yahoo'
    },
  ]
};

export default Footer;
