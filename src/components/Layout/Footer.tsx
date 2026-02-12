import { brandData } from '../../data/brandData';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-6 mt-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{brandData.name}</h3>
                        <p className="text-slate-300">
                            {brandData.industry}
                        </p>
                        <p className="text-slate-400 mt-4 italic text-sm">
                            "{brandData.footerNote}"
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
                        <p className="text-slate-300 mb-2">Email: {brandData.contact.email}</p>
                        <p className="text-slate-300 mb-2">Phone: +91 {brandData.contact.phone}</p>
                        <p className="text-slate-300">Founder: {brandData.founder.name}</p>

                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-center">
                    <p className="text-slate-400 text-sm">
                        &copy; {currentYear} {brandData.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
