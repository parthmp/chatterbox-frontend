import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

export default function App(){

	return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )

}