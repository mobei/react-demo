import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon, Tooltip } from 'antd';
import logoIcon from '../common/images/logo.png';
import './index.scss';

export default class Menus extends Component {
	constructor() {
    super();
    const menus = [{
        name: 'home',
        type: 'home',
        text: '首页'
      }, {
        name: 'ticket',
        type: 'book',
        text: '工单管理'
      }, {
        name: 'call',
        type: 'phone',
        text: '呼叫中心'
      }, {
        name: 'im',
        type: 'message',
        text: '即时通讯'
      }, {
        name: 'customer',
        type: 'team',
        text: '客户中心'
      }, {
        name: 'charts',
        type: 'bar-chart',
        text: '报表中心'
      }, {
        name: 'help',
        type: 'question-circle-o',
        text: '帮助中心'
      }, {
        name: 'setting',
        type: 'setting',
        text: '管理中心'
      }];
	    this.state = { menus };
	}
  render() {
    const menuViews = this.state.menus.map(menu =>
      <Tooltip key={menu.name} placement="right" title={menu.text}>
        <Link to={`/${menu.name}`} className="menu-box" activeClassName="active">
          <Icon type={menu.type} />
        </Link>
      </Tooltip>
    );
    return (
      <div className="ud-menus">
      	<Link to="/home" className="logo-box">
      		<div><img src={logoIcon} alt="Udesk" /></div>
      	</Link>
      	{menuViews}
      </div>
    );
  }
}

Menus.propTypes = {};
