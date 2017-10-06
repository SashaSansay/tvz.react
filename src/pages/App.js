import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import Home from 'pages/Home'
import About from 'pages/About'

const ContextType = {
	// Enables critical path CSS rendering
	// https://github.com/kriasoft/isomorphic-style-loader
	insertCss: PropTypes.func.isRequired
}

class App extends Component {
	static propTypes = {
		context: PropTypes.shape(ContextType).isRequired,
	}
	static childContextTypes = ContextType

	getChildContext () {
		return this.props.context
	}

	render () {
		return (
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
				</Switch>
		)
	}
}

export default App