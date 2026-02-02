import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { brandData } from '../../data/brandData';

const ProcessSection = () => {
    const { process } = brandData;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yFlow = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="py-32 lg:py-48 bg-slate-900 text-white relative overflow-hidden" id="process">

            {/* Bonding Element: Flowing Aura */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Asymmetric Header */}
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block">Our Methodology</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                            The <span className="text-white/20 italic">Ritusa</span> <br />
                            Standard of <span className="text-primary">Care.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Fluid Step Flow */}
                <div className="relative">
                    {/* Decorative Background Text */}
                    <motion.div
                        style={{ y: yFlow }}
                        className="absolute top-0 left-0 text-[20rem] font-black text-white/[0.02] select-none whitespace-nowrap pointer-events-none"
                    >
                        PRECISION • TRUST • CLARITY
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {process.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                className="relative group"
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="relative">
                                            <span className="text-6xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500">
                                                0{index + 1}
                                            </span>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                                        </div>
                                        <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-primary/30 transition-all duration-700" />
                                    </div>

                                    <h4 className="text-xl md:text-2xl font-light leading-relaxed text-white/80 group-hover:text-white transition-colors">
                                        {step}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Bonding Segment */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 lg:p-20 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Structured for Legal Clarity</h3>
                        <p className="text-white/50 font-light leading-relaxed">
                            Every milestone in our process is documented and verified to comply with RERA and other relevant regulatory bodies. Your protection is our primary governance model.
                        </p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSection;
