import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatus } from '../actions/im';
import AgentStatus from './agent-status';

class ImHeader extends Component {
  render() {
    const { dispatch, imStatus, nick } = this.props;
    return (
      <div className="im-header">
      	<div className="im-avatar"></div>
      	<span className="im-name">{nick}</span>
      	<AgentStatus toggleStatus={imStatus => dispatch(changeStatus(imStatus))} status={imStatus} />
      </div>
    );
  }
}

ImHeader.propTypes = {};

function mapStateToProps({ user }) {
  return {
    imStatus: user.imStatus,
    nick: user.nick
  }
}

export default connect(mapStateToProps)(ImHeader)
