import React, { Component } from 'react';
import { Switch, Tooltip } from 'antd';
import SearchInput from '../components/ud-search-input';
import DropMenu from '../account/drop-btn';
import './index.scss';

export default class Bars extends Component {
  search() {
    // console.log(param);
	}
  toggleAssign() {
    // console.log(`switch to ${opened}`);
	}
	logout() {
	  // console.log('logout');
	}
  render() {
    return (
      <div className="ud-bars">
        <SearchInput onSearch={this.search} size="large" />
        <div className="tc-auto-assign">
          <Tooltip placement="left" title="关闭之后，将不能收到随机分配的工单">
            <Switch defaultChecked={false} onChange={this.toggleAssign} />
      		</Tooltip>
      	</div>
        <DropMenu userName="Lufy" onLogout={this.logout} />
      </div>
    );
  }
}

Bars.propTypes = {};
