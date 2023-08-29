const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const verifyAccount = require('./src/middlewares/auth/veifyAccount')
const indexRouter = require('./src/routes/index')
const userRouter = require('./src/routes/users')
const adminRouter = require('./src/routes/admin')
const signupRouter = require('./src/routes/signup')
const loginRouter = require('./src/routes/login')
const transactionRouter = require('./src/routes/transaction')
const customerRouter = require('./src/routes/userInfo')
const logoutRouter = require('./src/routes/logout')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'pug')

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/admin', adminRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/transaction', verifyAccount, transactionRouter)
app.use('/userinfo', verifyAccount, customerRouter)
app.use('/logout', verifyAccount, logoutRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
