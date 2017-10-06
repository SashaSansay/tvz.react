import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.css'
import ListMiddledescAva from 'static/images/ListMiddleDescAva.jpg'

class Home extends PureComponent {
	static propTypes = {}
	static defaultProps = {}

	render () {
		return (
			<div>
				<h1 className={s.root}>Home</h1>
				<img src={ListMiddledescAva} alt=""/>
				<Link to="/about">got ot about page</Link>
			</div>
		)
	}
}

export default withStyles(s)(Home)