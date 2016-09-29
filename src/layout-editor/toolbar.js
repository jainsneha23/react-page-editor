import React from 'react';
import './toolbar.less';

const Toolbar = (props) => (
  <div className="toolbar">
    <ul>
      <li onClick={props.addSection}><span>&#43;</span>Add section</li>
      <li className={!props.active?'disabled':''} onClick={props.removeSection}><span>&#8722;</span>Remove section</li>
    </ul>
    <ul>
      <li className={!props.active?'disabled':''}
        onClick={props.active && props.moveUp}>
      <span>&#8593;</span>Move up</li>
      <li className={!props.active?'disabled':''}
        onClick={props.active && props.moveDown}>
        <span>&#8595;</span>Move down</li>
    </ul>
    <ul className="layout-icons">
      <li className={`col-1 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([12])}>
        <span></span></li>
      <li className={`col-2 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([8,8])}>
        <span></span><span></span></li>
      <li className={`col-3 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([4,4,4])}>
        <span></span><span></span><span></span></li>
      <li className={`col-1-2 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([4,8])}>
        <span></span><span></span></li>
      <li className={`col-2-1 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([8,4])}>
        <span></span><span></span></li>
      <li className={`col-1-2-1 ${!props.active?'disabled':''}`}
        onClick={() => props.active && props.splitSection([3,6,3])}>
        <span></span><span></span><span></span></li>
    </ul>
  </div>
);

Toolbar.propTypes = {
  addSection: React.PropTypes.func.isRequired,
  removeSection: React.PropTypes.func.isRequired,
  moveUp: React.PropTypes.func.isRequired,
  moveDown: React.PropTypes.func.isRequired,
  splitSection: React.PropTypes.func.isRequired,
  active: React.PropTypes.bool.isRequired
};

export default Toolbar;
