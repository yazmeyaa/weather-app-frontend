import { routesList } from './routes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../protectedRoute/protectedRoute'

export const MappedRoutes = () => {
    const token = 'Временный токен.'

    return (
        <Routes>
            {routesList.map(item => {
                return (
                    <Route
                        key={item.ID}
                        path={item.path}
                        element={
                            item.protected ? (
                                <ProtectedRoute token={token}>
                                    <item.element></item.element>
                                </ProtectedRoute>
                            ) : (
                                <item.element />
                            )
                        }
                    />
                )
            })}
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )
}
