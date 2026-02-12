import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../../components/Home/Hero';
import AboutSection from '../../components/Home/AboutSection';
import VisionMissionSection from '../../components/Home/VisionMissionSection';
import ServicesSection from '../../components/Home/ServicesSection';
import ProcessSection from '../../components/Home/ProcessSection';
import ValuesSection from '../../components/Home/ValuesSection';

const Home = () => {
    return (
        <main className="overflow-x-hidden relative">

            {/* Global Bridging Elements - These flow behind all sections */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[15%] -left-20 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-20 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[150px]" />
                <div className="absolute top-[70%] -left-40 w-[700px] h-[700px] bg-slate-100 rounded-full blur-[130px]" />
            </div>

            <Hero />
            <AboutSection />
            <VisionMissionSection />
            <ServicesSection />
            <ProcessSection />
            <ValuesSection />

            {/* Final Fluid CTA Section */}
            <section className="py-20 lg:py-40 bg-white relative">
                {/* Section Bridge */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-white -translate-y-full" />

                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white shadow-3xl relative overflow-hidden group"
                    >
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-8 block"
                            >
                                Start Your Journey
                            </motion.span>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
                                Exceptional <span className="text-white/20 italic">Properties.</span> <br />
                                Ethical <span className="text-primary">Advisory.</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                                Join the hundreds of investors who trust Ritusa Realty for transparent, process-driven real estate success.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Link to="/contact" className="group/btn relative px-12 py-6 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-16 active:scale-95 shadow-[0_20px_40px_rgba(59,130,246,0.3)]">
                                    <span className="relative z-10 uppercase tracking-widest text-sm">Talk to an Advisor</span>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all">
                                        →
                                    </div>
                                </Link>
                                <Link to="/projects" className="px-12 py-6 text-white/60 hover:text-white font-bold text-sm uppercase tracking-widest border border-white/10 rounded-full transition-all hover:bg-white/5">
                                    Browse Portfolio
                                </Link>
                            </div>
                        </div>

                        {/* High-End Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Home;
