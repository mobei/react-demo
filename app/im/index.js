import React, { Component } from 'react';
import ImHeader from './im-header';
import ImChats from './im-chats';
import ImMessages from './im-messages';
import './index.scss';

export default class Im extends Component {
  render() {
    return (
      <div className="ud-im">
        <div className="im-nav">
          <ImHeader />
          <ImChats />
        </div>
        <ImMessages />
      </div>
    );
  }
}

Im.propTypes = {};
