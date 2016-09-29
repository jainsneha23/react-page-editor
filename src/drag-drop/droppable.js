import React from 'react';
import './style.less';

class Droppable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      droppedElem: null
    };
    this.drop = this.drop.bind(this);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var dragId = ev.dataTransfer.getData('drag-id');
    this.setState({droppedElem: this.props.dropped(dragId, this.props.id)});
  }

  render() {
    return (
      <div className="droppable"
      onDrop={this.drop}
      onDragOver={this.allowDrop} >
      {this.state.droppedElem && React.createElement(this.state.droppedElem)}
      </div>
    );
  }
}

Droppable.propTypes = {
  dropped: React.PropTypes.func.isRequired,
  id: React.PropTypes.any.isRequired
};

export default Droppable;
