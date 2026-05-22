import { Outlet } from 'react-router'

function ProtectedRoutes() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoutes
