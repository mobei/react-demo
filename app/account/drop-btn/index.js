import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Menu, Dropdown, Icon } from 'antd';
import userIcon from '../../common/images/account/user.png';
import './index.scss';

export default class DropMenu extends Component {
  handleClick() {
    if (this.props.onLogout) {
      this.props.onLogout();
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/account/settings">
            <Icon type="user" style={{ marginRight: 5 }} />个人设置
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/account/settings">
            <Icon type="question-circle-o" style={{ marginRight: 5 }} />获取帮助
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <span onClick={this.handleClick}>
            <Icon type="logout" style={{ marginRight: 5 }} />注销
          </span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="account-drop-menu">
        <div className="user-icon-box"><img src={userIcon} alt="头像" /></div>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            <span className="user-name">{this.props.userName}</span>
            <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

DropMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  onLogout: PropTypes.func
};
