import React, { Component, PropTypes } from 'react';
import { Menu, Dropdown, Button } from 'antd';

export default class AgentStatus extends Component {
  getStatus() {
    return [{
      text: '在线',
      value: 'online'
    }, {
      text: '忙碌',
      value: 'busy'
    }, {
      text: '离线',
      value: 'offline'
    }];
  }
  getStatusText(status) {
    return this.getStatus().find(item => item.value === status).text;
  }
  handleClick(status) {
    this.props.toggleStatus(status);
  }
  render() {
    const self = this;
    const status = this.props.status;
  	const dropMenus = (
  	  <Menu style={{width: 70}}>
        {this.getStatus().map(sta =>
          <Menu.Item key={sta.value} disabled={sta.value === status}>
            <span onClick={self.handleClick.bind(self, sta.value)}>{sta.text}</span>
          </Menu.Item>
        )}
  	  </Menu>
  	);
    return (
      <Dropdown overlay={dropMenus} trigger={['click']}>
        <Button className="statue-btn" size="small" type="ghost">
          {this.getStatusText(status)}
          <i className={`circle ${status}`} />
        </Button>
      </Dropdown>
    );
  }
}

AgentStatus.propTypes = {
  status: PropTypes.string.isRequired,
  toggleStatus: PropTypes.func.isRequired
};
