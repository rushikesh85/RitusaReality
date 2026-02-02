import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center">
                    <Link to="/" className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <span className={`text-xl md:text-2xl font-light tracking-wide transition-colors duration-500 ${isHome && !isScrolled ? 'text-white' : 'text-slate-900'
                                }`}>
                                RITUSA <span className="font-semibold text-primary">REALTY</span>
                            </span>
                            <span className={`text-[8px] tracking-[0.4em] uppercase font-bold transition-all duration-500 ${isHome && !isScrolled ? 'text-white/40' : 'text-slate-400'
                                }`}>
                                Limited Liability Partnership
                            </span>
                        </motion.div>
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex gap-12 items-center">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.path}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`relative text-sm font-medium tracking-widest uppercase transition-all duration-300 group ${location.pathname === item.path
                                            ? (isHome && !isScrolled ? 'text-white' : 'text-primary')
                                            : (isHome && !isScrolled ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                                            }`}
                                    >
                                        {item.label}
                                        <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : 'w-0'
                                            }`} />
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link
                                    to="/contact"
                                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${isHome && !isScrolled
                                        ? 'bg-white text-black hover:bg-white/90'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                        }`}
                                >
                                    Inquire
                                </Link>
                            </motion.li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle (Simplified for now) */}
                    <div className="md:hidden">
                        <button className={`w-8 h-8 flex flex-col justify-center gap-1.5 ${isHome && !isScrolled ? 'text-white' : 'text-slate-900'
                            }`}>
                            <span className="w-full h-[1px] bg-current"></span>
                            <span className="w-2/3 h-[1px] bg-current self-end"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
