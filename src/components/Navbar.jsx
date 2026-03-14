import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Kart <span className="text-primary">Wala</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-2">
            <button
              id="cart-icon"
              className="relative p-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              <HiOutlineShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <button
              id="user-icon"
              className="p-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              <HiOutlineUser className="w-5 h-5" />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-1" />

            <Link
              to="/login"
              id="login-btn"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>

            <Link
              to="/signup"
              id="signup-btn"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 text-gray-600 hover:text-primary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[420px] pb-5' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-3 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-4 px-3">
              <button className="p-2 text-gray-500 hover:text-primary"><HiOutlineShoppingCart className="w-5 h-5" /></button>
              <button className="p-2 text-gray-500 hover:text-primary"><HiOutlineUser className="w-5 h-5" /></button>
            </div>
            <div className="flex gap-3 mt-3 px-3">
              <Link to="/login" className="flex-1 py-2.5 text-sm font-semibold text-primary text-center border-2 border-primary/20 rounded-lg hover:border-primary transition-all" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="flex-1 py-2.5 text-sm font-semibold text-white text-center bg-primary rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
