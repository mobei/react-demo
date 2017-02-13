import React, { Component, PropTypes } from 'react';
import { Card, Icon } from 'antd';

export default class Home extends Component {
  render() {
    const clazz = `${this.props.clazz} data-view-box`;
    return (
      <Card className={clazz}>
        <Icon type={this.props.icon} className="data-view-icon" />
        <span className="data-view-num">{this.props.num}</span>
        <span className="data-view-text">{this.props.text}</span>
      </Card>
    );
  }
}

Home.propTypes = {
  num: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clazz: PropTypes.string.isRequired
};
