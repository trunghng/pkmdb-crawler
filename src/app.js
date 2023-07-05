const path = require('path')
const express = require('express')
const config = require('./config')
const indexRouter = require('./routes/index')
const detailRouter = require('./routes/detail')
const session = require('express-session')

// app setup
const app = express()
const port = config.web.port
app.listen(port, () => console.log(`Server listening on port ${port}!`))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

// session setup
app.use(session({
	resave: false, // don't save session if unmodified
	saveUninitialized: false, // don't create session until something stored
	secret: 'keyboard cat'
}))

// routing
app.use('/', indexRouter)
app.use('/pokemon/', detailRouter)
