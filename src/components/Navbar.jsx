import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function AppNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%", transition: { duration: 0.4 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: 'easeIn' } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#3e2723] px-6 py-4 flex items-center justify-between h-16">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">RETA CAFFEE</div>

      {/* Mobile Icons */}
      <div className="flex items-center lg:hidden space-x-3 relative z-[9999]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen
            ? <FiX size={28} className="text-white" />
            : <FiMenu size={28} className="text-white" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 items-center">
        <li><Link to="/" className="text-white hover:text-gray-300">HOME</Link></li>
        <li><Link to="/Iced" className="text-white hover:text-gray-300">ICED </Link></li>
        <li><Link to="/Hot" className="text-white hover:text-gray-300">HOT </Link></li>
        <li><Link to="/Quarter" className="text-white hover:text-gray-300">Quarter Kilo</Link></li>
        <li><Link to="/Half" className="text-white hover:text-gray-300">HALF Kilo</Link></li>
        <li><Link to="/About" className="text-white hover:text-gray-300">ABOUT US</Link></li>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 h-screen w-1/2 bg-[#3e2723] flex flex-col px-6 py-8 space-y-6 z-50"
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">Home</Link>
            <Link to="/Iced" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">ICED</Link>
            <Link to="/Hot" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">HOT</Link>
            <Link to="/Quarter" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">Quarter Kilo</Link>
            <Link to="/Half" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">HALF Kilo</Link>
            <Link to="/About" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg hover:text-gray-300">ABOUT US</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default AppNavbar;
