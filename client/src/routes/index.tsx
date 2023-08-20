import { createBrowserRouter } from 'react-router-dom'
import home from './home'
import login from './login'
import signup from './signup'

const router = createBrowserRouter([home, login, signup])

export default router