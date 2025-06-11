import React from 'react'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'submit', label: 'Submit Art' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div 
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-3xl font-bold text-white">We Rise Live</h1>
            <p className="text-purple-100 text-sm">Empowering Artists, Building Community</p>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'text-purple-100 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}