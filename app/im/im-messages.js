import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload, message as Message, Button, Icon } from 'antd';
import { EmojiPanel, parseEmoji } from '../components/emoji';
import ImUploader from './im-uploader';
import { addMessage, addMessageId } from '../actions/im';
import { uuid, dom } from '../common/js/util';

class ImMessages extends Component {
  selectEmoji(emoji) {
    const inputEl = this.refs.msgInput;
    inputEl.value += emoji+' ';
    inputEl.focus();
  }
  onPressEnter(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.sendMsg();
    } 
  }
  sendMsg(msg) {
    const { chat = {}, dispatch } = this.props;
    msg = msg || this.refs.msgInput.value;
    msg = this.createMsg(msg, chat.id);
    this.refs.msgInput.value = '';

    dispatch(addMessage(msg));
    dispatch(addMessageId(chat.id, msg.id));
  }
  createMsg(msg, chatId) {
    return {
        id: uuid('msg'),
        chatId: chatId,
        type:'message',
        content: msg,
        sender: 'agent',
        senderId: 1,
        senderName: '路飞',
        filename: "",
        filesize: "",
        create_at: '2016-01-01 12:00',
        status: 1
    };
  }
  scrollToBottom() {
    const msgList = this.refs.msgList;
    const msgBox = this.refs.msgBox;
    dom.scrollTo(msgBox, msgList.offsetHeight);
  }
  parseMsg(msg) {
    /**
     * 还需要一个xss转换
     * dangerouslySetInnerHTML,为了解析html片段
     */
    return { __html: parseEmoji(msg) }; 
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const { chat = {}, messages = [] } = this.props;
    return (
      <div className="im-messages">
      	<div className={`im-customer-info ${chat.online ? 'online' : 'offline'}`}>
      		<div className="im-customer-avatar"></div>
      		<div className="im-customer-name">{chat.nick}</div>
      		<div className="im-customer-status">{chat.online ? '在线' : '离线'}</div>
          <div className="im-customer-platform"><Icon type="desktop" /></div>
      	</div>
        <div className="im-messages-box scrollbar" ref="msgBox">
          <ul className="im-msg-list" ref="msgList">
            {
              messages.map(msg => {
                const clz = `im-msg-item clearfix ${msg.sender==='agent' ? 'send' : 'receive'} ${msg.type}`;
                return (
                  <li key={msg.id} className={clz}>
                    <div className="im-msg-content">
                      <span dangerouslySetInnerHTML={this.parseMsg(msg.content)}></span>
                      <div className="sharp"></div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="im-msg-bar">
          <div className="tool-bar">
            <EmojiPanel className="im-emoji-panel" onSelect={this.selectEmoji.bind(this)} >
              <Icon type="smile" />
            </EmojiPanel>
            <ImUploader className="uploader-box">
              <Icon id="im-up-picker" type="paper-clip" />
            </ImUploader>
            <Icon type="calendar" />
          </div>
          <textarea ref="msgInput" onKeyDown={this.onPressEnter.bind(this)}></textarea>
        </div>
      </div>
    );
  }
}

ImMessages.propTypes = {};

function mapStateToProps({ chats, messages }) {
  const chat = chats.find(item => item.active);
  const chatMsgs = messages.filter((msg) => {
    return msg.chatId === chat.id;
  });
  return { 
    chat: chat,
    messages: chatMsgs || []
  }
}

export default connect(mapStateToProps)(ImMessages)
