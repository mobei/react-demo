import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';
import App from './containers/app';
import Home from './home';
import Im from './im';

export default class Root extends Component {
	render() {
		return (
		  <Router history={this.props.history}>
		  	<Redirect from="/" to="/home" />
		    <Route path="/" component={App} >
		    	<Route path="/home" component={Home} />
		    	<Route path="/ticket" component={Home} />
		    	<Route path="/call" component={Home} />
		    	<Route path="/im" component={Im} />
		    	<Route path="/customer" component={Home} />
		    	<Route path="/charts" component={Home} />
		    	<Route path="/help" component={Home} />
		    	<Route path="/setting" component={Home} />
		    </Route>
		  </Router>
		);
	}
}

Root.propTypes = {
  history: PropTypes.any
};
