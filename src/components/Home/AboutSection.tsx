import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { brandData } from '../../data/brandData';
import modernArchImage from '../../assets/modern_real_estate_advisory_1769883433329.png';

const AboutSection = () => {
    const { aboutSection, founder } = brandData;
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={sectionRef} className="py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header Section - Bold & Clear */}
                <div className="max-w-5xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block">
                            Driven by Integrity
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter mb-12">
                            Professionally <span className="text-slate-300">Structured.</span> <br />
                            Authentically <span className="italic">Driven.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Visual Pillar */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            style={{ y: yImg, scale: scaleImg }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                        >
                            <img
                                src={modernArchImage}
                                alt="Modern Architectural Vision"
                                className="w-full aspect-[16/10] object-cover"
                            />

                            {/* Overlay tag */}
                            <div className="absolute top-10 left-10 py-3 px-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Est. 2026 Vibe</span>
                            </div>
                        </motion.div>

                        {/* Asymmetric caption */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-16 -right-6 lg:-right-20 max-w-sm p-12 bg-slate-900 text-white rounded-[2rem] shadow-3xl z-20"
                        >
                            <p className="text-xl font-light leading-relaxed mb-8 opacity-90">
                                "{founder.philosophy}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-primary" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold uppercase tracking-wider">{founder.name}</span>
                                    <span className="text-[10px] opacity-50 uppercase tracking-widest">{founder.designation}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Information Cluster */}
                    <div className="lg:col-span-5 lg:pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">
                                Redefining Trust in Real Estate
                            </h3>
                            <p className="text-lg text-slate-500 leading-relaxed mb-16 font-light">
                                {aboutSection.description}
                            </p>

                            <div className="space-y-12">
                                {aboutSection.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex gap-8 group"
                                    >
                                        <span className="text-4xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
                                                {highlight.split(' ')[0]} {highlight.split(' ')[1]}
                                            </h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {highlight}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
