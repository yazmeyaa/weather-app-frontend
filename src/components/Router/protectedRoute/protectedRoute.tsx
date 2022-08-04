import { Outlet, Navigate } from 'react-router-dom'
import { ProtectedRouteType } from './protectedRoute.types'

export const ProtectedRoute: ProtectedRouteType = ({ token = null }) => {
    return token ? <Outlet /> : <Navigate to="/auth" replace />
}
