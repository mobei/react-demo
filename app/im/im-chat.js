import React, { Component, PropTypes } from 'react';
import { Icon, Badge } from 'antd';
import classNames from 'classnames';

export default class ImChat extends Component {
  getIconType(platform = 'web') {
    const types = {
      web: 'desktop',
      android: 'android',
      ios: 'apple'
    };
    return types[platform] || 'desktop';
  }
  handleClick() {
    this.props.onSelected(this.props.chat);
  }
  close(event) {
    event.stopPropagation();
    this.props.onClose(this.props.chat);
  }
  render() {
    const chat = this.props.chat;
    const clazz = classNames({
      'im-chat': true,
      active: this.props.active,
      online: chat.online
    });
    const iconType = this.getIconType(chat.platform);
    return (
      <div className={clazz} onClick={this.handleClick.bind(this)}>
          <div className="nick-line">
            <Icon className="platform" type={iconType} />
            <span className="nick-name">{chat.nick}</span>
            <Badge className="unread" count={chat.unread} >
              <span></span>
            </Badge>
          </div>
          <div className="msg-line">
            <span className="msg-content">{chat.lastMsg}</span>
            <span className="msg-time">09:09</span>
          </div>
          <span className="close" onClick={this.close.bind(this)}><Icon type="cross" /></span>
      </div>
    );
  }
}

ImChat.propTypes = {
  chat: PropTypes.object.isRequired,
  onSelected: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
