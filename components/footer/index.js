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
      linkTo: 'http://twitter.com',
      title: 'Twitter'
    }, {
      linkTo: 'http://facebook.com',
      title: 'Facebook'
    },
  ]
};

export default Footer;
