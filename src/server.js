import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from 'pages/App'
import Html from 'components/Html.jsx'
import assets from './assets.json' // eslint-disable-line import/no-unresolved
import config from './config.json' // eslint-disable-line import/no-unresolved

const app = express()

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')))

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
	if (req.url) {
		try {
			const css = new Set()

			const context = {
				insertCss: (...styles) => {
					// eslint-disable-next-line no-underscore-dangle
					styles.forEach(style => css.add(style._getCss()))
				}
			}

			const data = {}

			data.children = ReactDOM.renderToString(
				<StaticRouter context={context} location={req.url}>
					<App context={context}/>
				</StaticRouter>
			)
			data.styles = [
				{id: 'css', cssText: [...css].join('')},
			]
			data.scripts = [
				assets.vendor.js,
				assets.main.js,
			]

			const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)

			res.status(200)
			res.send(`<!doctype html>${html}`)
		} catch (err) {
			next(err)
		}
	}
})

//
// Launch the server
// -----------------------------------------------------------------------------

app.listen(parseInt(config.port), config.host, () => console.info(config.serverWasRunDetectString))