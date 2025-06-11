import React, { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'
import SubmitArt from './components/SubmitArt'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'gallery':
        return <Gallery />
      case 'submit':
        return <SubmitArt onNavigate={setCurrentPage} />
      case 'contact':
        return <Contact />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
      
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">We Rise Live</h3>
            <p className="text-gray-400 mb-6">Empowering Artists, Building Community</p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('gallery')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => setCurrentPage('submit')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Submit Art
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2025 We Rise Live. Built with ❤️ for the creative community.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App