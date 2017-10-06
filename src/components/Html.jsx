import React from 'react'
import PropTypes from 'prop-types'

const html = ({title, description, styles, scripts, children}) => (
	<html className="no-js" lang="en">
	<head>
		<meta charSet="utf-8"/>
		<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
		<title>{title}</title>
		<meta name="description" content={description}/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="apple-touch-icon" href="apple-touch-icon.png"/>
		{
			styles.map(style => (
				<style
					key={style.id}
					id={style.id}
					dangerouslySetInnerHTML={{__html: style.cssText}}
				/>
			))
		}
	</head>
	<body>
	<div id="ROOT_APP" dangerouslySetInnerHTML={{__html: children}}/>
	{
		scripts.map((script) => <script key={script} src={script}/>)
	}
	</body>
	</html>
)

html.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	styles: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		cssText: PropTypes.string,
	}).isRequired),
	scripts: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.string,
}

html.defaultProps = {
	styles: [],
	scripts: [],
}

export default html