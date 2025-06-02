import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Newsroom from './pages/Newsroom'
import Search from './pages/Search'
import MatchComponent from './pages/MatchComponent' 
import Upload from './pages/Upload' 
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import SupportPage from './pages/SupportPage'
import MALTResources from './pages/MALTResources' 
import LoginForm from './components/LoginForm'
import ForgotPassword from './components/ForgotPassword'
import Profile from './components/Profile'
import Settings from './components/Settings' 
import Dashboard from './components/Dashboard'
import UploadInfo from './components/UpladInfo'
export default function App() {
  return (
    <div className="App bg-ocean-lightBg dark:bg-ocean-darkBg min-h-screen text-ocean-lightText dark:text-ocean-darkText transition-colors duration-500">
      <Router>
        {/* Layout components outside Routes */}
        <Header />

        {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/search" element={<Search />} />
            <Route path="/match" element={<MatchComponent />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/MALTResources" element={<MALTResources />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/reset" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/uploadinfo" element={<UploadInfo />} />
            {/* routes pages */}
          </Routes>
        <CookieConsent />
        <Footer />
      </Router>
    </div>
  )

}
