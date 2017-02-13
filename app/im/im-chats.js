import React, { Component } from 'react';
import _remove from 'lodash/remove';
import QueueAnim from 'rc-queue-anim';
import ImChat from './im-chat';
import { connect } from 'react-redux';
import { addChat, selectChat, removeChat } from '../actions/im';

class ImChats extends Component {
  render() {
    const self = this;
    const { dispatch, chats } = this.props;
    return (
      <QueueAnim component="div" className="im-chats" type={['right', 'left']}>
        {chats.map((chat) => {
          return (
            <ImChat
              key={chat.id}
              chat={chat}
              active={chat.active}
              onClose={chat => dispatch(removeChat(chat.id))}
              onSelected={chat => dispatch(selectChat(chat))}
            />
          );
        })}
      </QueueAnim>
    );
  }
}

ImChats.propTypes = {};

function mapStateToProps({ chats }) {
  return { chats }
}

export default connect(mapStateToProps)(ImChats)
