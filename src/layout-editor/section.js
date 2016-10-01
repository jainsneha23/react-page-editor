import React from 'react';
import './section.less';

const getComp = (props, i) => {
  let childNode;
  const child = props.getChild(props.childList[i]);
  if (child.name === 'Droppable') {
    childNode = React.createElement(child, {
      dropped: props.getChild,
      id: {x: props.index, y: i}
    });
  } else {
    childNode = React.createElement(child,
      child.props || child.defaultProps || {}
    );
  }
  return childNode;
};

const Section = (props) => {
  const active = props.index === props.active.x;
  return (
    <div className='section'>
    {props.column.map((v,i) =>
      <div key={i} onClick={() => props.setActive(props.index, i)}
        className={`col col-${v} ${active && props.active.y === i? 'active' : ''} ${props.getChild(props.childList[i]).name === 'Droppable' ? '' : 'dropped'}`}>
        {getComp(props, i)}
      </div>
    )}
    </div>
  );
};

Section.propTypes = {
  index: React.PropTypes.number.isRequired,
  active: React.PropTypes.object.isRequired,
  setActive: React.PropTypes.func.isRequired,
  column: React.PropTypes.array.isRequired,
  childList: React.PropTypes.array.isRequired,
  getChild: React.PropTypes.func.isRequired
};

export default Section;
