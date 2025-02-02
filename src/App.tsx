import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
