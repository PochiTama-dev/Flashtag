import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { QRDesignPage, LoginPage, DashboardPage, FlashTagProductsPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app-container">
        {window.location.pathname !== '/login' && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<FlashTagProductsPage />} />
            <Route path="/qrDesign" element={<QRDesignPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App