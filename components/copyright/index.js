import React from 'react';

const Copyright = (props) => (
  <div>
    <p className="copyright-content">{props.text}</p>
  </div>
);

Copyright.propTypes = {
  text: React.PropTypes.string.isRequired
};

Copyright.defaultProps = {
  text: 'Copyright @2016'
};

export default Copyright;
