import { createBrowserRouter } from 'react-router-dom'
import home from './home'
import login from './login'
import signup from './signup'
import user from './user'
import admin from './admin'

const router = createBrowserRouter([home, login, signup, user, ...admin])

export default router