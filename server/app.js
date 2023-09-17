const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const multer = require('multer')

dotenv.config()
const nrcphoto = require('./src/services/nrcPhoto')
const unregisteredUsers = require('./src/services/unregisterUsers')
const resolve = require('./src/utils/resolve')
const verifyAccount = require('./src/middlewares/auth/veifyAccount')
const verifyPassword = require('./src/middlewares/auth/verifyPassword')
const indexRouter = require('./src/routes/index')
const userRouter = require('./src/routes/users')
const adminRouter = require('./src/routes/admin')
const signupRouter = require('./src/routes/signup')
const loginRouter = require('./src/routes/login')
const transferRouter = require('./src/routes/transfer')
const customerRouter = require('./src/routes/userInfo')
const logoutRouter = require('./src/routes/logout')
const feedbacks = require('./src/services/feedbacks')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, 'src/nrcphotos'));
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    callback(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

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
app.use(
  '/nrcimages',
  express.static(path.join(__dirname, 'src/nrcphotos'))
)

app.use('/', indexRouter)
app.use('/feedbacks', async (req, res) => {
  const allfeedbacks = await feedbacks.retrieveAll()
  return res.status(200).json({ feedbacks: allfeedbacks })
})
app.use('/users', verifyAccount, userRouter)
app.use('/admin', adminRouter)
app.use('/signup', signupRouter)
app.post('/signup/5', upload.fields([
  { name: 'nrcFront', maxCount: 1 },
  { name: 'nrcBack', maxCount: 1 }
]),
  verifyPassword,
  async (req, res) => {
    if (!req.files || !req.files['nrcFront'] || !req.files['nrcBack']) {
      return res.status(400).send('Both images are required.');
    }
    const nrcFront = req.files['nrcFront'][0].filename;
    const nrcBack = req.files['nrcBack'][0].filename;
    const phoneNumber = resolve.phoneNumber(req)
    try {
      await nrcphoto.create(phoneNumber, nrcFront, nrcBack)
      await unregisteredUsers.create(phoneNumber)
      return res.status(201).send()
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" })
    }
  })
app.use('/login', loginRouter)
app.use('/transfer', verifyAccount, transferRouter)
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
