import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'pages/App'

const context = {
	insertCss: (...styles) => {
		// eslint-disable-next-line no-underscore-dangle
		const removeCss = styles.map(x => x._insertCss())
		return () => { removeCss.forEach(f => f()) }
	},
}

const render = (Component, container) => {
	ReactDOM.render(
		<BrowserRouter>
			<AppContainer>
				<Component context={context}/>
			</AppContainer>
		</BrowserRouter>,
		container
	)
}

document.addEventListener('DOMContentLoaded', () => {
	render(App, document.getElementById('ROOT_APP'))
})

if (module.hot) {
	module.hot.accept('pages/App', () => {
		render(App)
	})
}