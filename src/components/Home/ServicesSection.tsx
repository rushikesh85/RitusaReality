import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Home, Search, Map, Users, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { brandData } from '../../data/brandData';

const getIcon = (index: number) => {
    switch (index) {
        case 0: return <Home size={24} />;
        case 1: return <Map size={24} />;
        case 2: return <Search size={24} />;
        case 3: return <Users size={24} />;
        case 4: return <ClipboardCheck size={24} />;
        default: return <Home size={24} />;
    }
};

const ServicesSection = () => {
    const { services } = brandData;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const xMove = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative py-20 lg:py-40 bg-white overflow-visible" id="services">

            {/* Bonding Element: Gradient Flow from previous section */}
            <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-[#fafafa] to-white -translate-y-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Asymmetric Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                            Curated <span className="text-slate-300">Solutions</span> <br />
                            for Modern Realities
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-lg text-slate-500 font-light max-w-sm lg:pb-4 leading-relaxed"
                    >
                        We bridge the gap between complex property markets and your life goals through ethical, process-driven advisory.
                    </motion.p>
                </div>

                {/* Fluid Bento Grid - Non-boxed look */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">

                    {/* Featured Service Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 lg:col-span-7 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-between min-h-[500px] relative overflow-hidden group shadow-2xl"
                    >
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform duration-500">
                                {getIcon(0)}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{services.list[0]}</h3>
                            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                                Strategic consulting tailored for first-time buyers and seasoned investors, ensuring legal and financial clarity at every step.
                            </p>
                        </div>

                        <div className="mt-auto relative z-10 flex items-center gap-4 group/btn cursor-pointer">
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">Inquire Now</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>

                        {/* Background Deco for Bonding */}
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.15)_0%,transparent_50%)] pointer-events-none" />
                    </motion.div>

                    {/* Secondary Cards - Asymmetric */}
                    <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 lg:gap-10">
                        {services.list.slice(1, 3).map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-[#fafafa] border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 min-h-[240px]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                    {getIcon(index + 1)}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors">{service}</h4>
                                <div className="w-0 h-[1px] bg-primary/30 transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Row - More fluid */}
                    {services.list.slice(3).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="md:col-span-6 lg:col-span-4 p-10 rounded-[2.5rem] bg-white border border-slate-100 flex items-start gap-8 hover:shadow-lg transition-all duration-500 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                {getIcon(index + 3)}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{service}</h4>
                                <p className="text-sm text-slate-500 font-light leading-relaxed">
                                    Professional guidance ensuring precision in every document and transaction stage.
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Aesthetic Stats Card - Bonding with project section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 lg:col-span-4 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex flex-col justify-center items-center text-center group overflow-hidden relative"
                    >
                        <span className="text-6xl lg:text-8xl font-black text-primary/10 absolute -bottom-10 -right-4 select-none group-hover:scale-110 transition-transform duration-1000 uppercase">Trust</span>
                        <div className="relative z-10">
                            <span className="block text-4xl font-bold text-slate-900 mb-2 tracking-tighter">100%</span>
                            <span className="block text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Legal Compliance</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bonding Element: Background Blob drifting across sections */}
            <motion.div
                style={{ y: xMove }}
                className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"
            />
        </section>
    );
};

export default ServicesSection;
