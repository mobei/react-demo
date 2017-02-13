import React, { Component, PropTypes } from 'react';
import Menus from './menus';
import Bars from './bars';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="ud-application">
        <Menus />
        <Bars />
        <div className="ud-content">
      		{this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired
};

