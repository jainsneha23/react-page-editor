import React from 'react';

import LayoutEditor from '../../react-layout-editor/src/';
import {Draggable, Droppable} from '../../react-dragdrop/src/';
import * as components from '../components';

import './style.less';

class Component extends React.Component {

  dropped(compName) {
    return components[compName];
  }

  render() {
    return (
      <div className="editor">
        <div className="leftpane">
          <LayoutEditor>
            <Droppable dropped={this.dropped} />
          </LayoutEditor>
        </div>
        <div className="rightpane">
          {Object.keys(components).map((comp, index) =>
            <Draggable key={index} elem={comp} />
          )}
        </div>
      </div>
    );
  }
}

export default Component;
