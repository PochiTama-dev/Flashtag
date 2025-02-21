import './App.css'
 
import Sidebar from './components/Sidebar/Sidebar'
import { FlashTagProductsPage } from './pages'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <FlashTagProductsPage />
      </div>
    </div>
  )
}

export default App
