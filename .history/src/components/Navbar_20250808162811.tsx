"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // メニューが開いている時にスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Works", href: "#cases", description: "制作実績" },
    { name: "About", href: "#about", description: "PROMO AIについて" },
    { name: "Services", href: "#services", description: "サービス一覧" },
    { name: "Pricing", href: "#pricing", description: "料金プラン" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-primary bg-opacity-95 backdrop-blur-sm shadow-soft py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-secondary tracking-tight">PROMO AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-secondary font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary text-sm"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                className="w-6 h-0.5 bg-white block absolute"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block absolute"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block absolute"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 z-40 bg-gradient-to-br from-black via-gray-900 to-black"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5"></div>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="container-custom px-6">
                {/* Logo in Menu */}
                <motion.div
                  variants={itemVariants}
                  className="mb-12 text-center"
                >
                  <span className="text-3xl font-display font-bold text-secondary tracking-tight">PROMO AI</span>
                </motion.div>

                {/* Navigation Links */}
                <div className="space-y-6 mb-12">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      className="group"
                    >
                      <Link
                        href={link.href}
                        className="block py-4 px-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors duration-300">
                              {link.name}
                            </h3>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {link.description}
                            </p>
                          </div>
                          <motion.div
                            className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <FiArrowRight size={20} />
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Button */}
                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center w-full py-4 px-8 bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>お問い合わせ</span>
                    <FiArrowRight className="ml-2" size={20} />
                  </Link>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 text-center text-gray-500 text-sm"
                >
                  <p>AIを活用した動画制作サービス</p>
                  <p className="mt-1">プロモーションの常識を変える</p>
                </motion.div>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              variants={itemVariants}
              className="absolute top-8 right-6 text-white hover:text-secondary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={28} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 