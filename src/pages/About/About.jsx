import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css'
import ListMiddledescAva from 'static/images/ListMiddleDescAva.jpg'

class About extends PureComponent {
	static propTypes = {}
	static defaultProps = {}

	render () {
		return (
			<div>
				<h1 className={s.root}>About</h1>
				<img src={ListMiddledescAva} alt=""/>
				<Link to="/">got ot about home</Link>
			</div>
		)
	}
}

export default withStyles(s)(About)