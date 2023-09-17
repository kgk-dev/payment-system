import Dashboard from './dashboard'
import AdminInfoProvider from './provider/adminInfoProvider'

export default function Admin() {
  return (
    <AdminInfoProvider>
      <Dashboard />
    </AdminInfoProvider>
  )
}