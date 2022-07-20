import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from 'views/weather'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
