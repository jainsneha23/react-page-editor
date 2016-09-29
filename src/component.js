import React from 'react';

import LayoutEditor from './layout-editor';
import {Draggable, Droppable} from './drag-drop';
import * as components from './components';

import './style.less';
import 'reset-css/reset.less';

class Component extends React.Component {

  render() {
    return (
      <div className="editor">
        <div className="leftpane">
          <h3>Components</h3>
          <ul>
            {Object.keys(components).map((comp, index) =>
              <li key={index}><Draggable elem={comp} /></li>
            )}
          </ul>
        </div>
        <div className="rightpane">
          <LayoutEditor childList={components} defaultChild={Droppable} />
        </div>
      </div>
    );
  }
}

export default Component;
