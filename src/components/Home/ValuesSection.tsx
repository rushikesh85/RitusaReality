import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Award, Briefcase, TrendingUp } from 'lucide-react';
import { brandData } from '../../data/brandData';

const getIcon = (index: number) => {
    switch (index) {
        case 0: return <ShieldCheck size={24} />;
        case 1: return <Award size={24} />;
        case 2: return <Heart size={24} />;
        case 3: return <Briefcase size={24} />;
        case 4: return <TrendingUp size={24} />;
        default: return <ShieldCheck size={24} />;
    }
};

const ValuesSection = () => {
    const { coreValues, whyChooseUs } = brandData;

    return (
        <section className="py-32 lg:py-52 bg-white relative overflow-visible">

            {/* Bonding Element: Background Text drifting into this section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10rem] lg:text-[20rem] font-black text-slate-50 select-none pointer-events-none -z-10 leading-none">
                ETHOS
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-stretch">

                    {/* Core Values Column */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="mb-20"
                        >
                            <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6 block">Our Fundamentals</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none mb-4">Core <br /> <span className="text-slate-300">Values.</span></h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coreValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className="p-8 bg-[#fafafa] border border-slate-100 rounded-3xl group hover:bg-white hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                        {getIcon(index)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-800 uppercase tracking-widest leading-loose">
                                        {value}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us Column - Overlapping Glass Panel */}
                    <div className="w-full lg:w-1/2 relative lg:pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative z-10 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-3xl overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-8 block">The Advantage</span>
                                <h3 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter">Why Partner <br /> With <span className="text-primary italic">Ritusa?</span></h3>

                                <div className="space-y-12">
                                    {whyChooseUs.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex gap-8 group/item"
                                        >
                                            <div className="text-primary font-black text-xl italic opacity-30 group-hover/item:opacity-100 transition-opacity">0{index + 1}</div>
                                            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                {item}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Blur and Text Bonding */}
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
                            <div className="absolute -bottom-10 -right-10 text-8xl font-black text-white/[0.03] select-none pointer-events-none">EXCEL</div>
                        </motion.div>

                        {/* Asymmetric Offset Background */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-slate-100 rounded-[3rem] -z-10 translate-x-12 translate-y-12 hidden lg:block" />
                    </div>
                </div>
            </div>

            {/* Final Section Bridging - Moving Background Text */}
            <div className="absolute -bottom-10 left-0 text-[8rem] lg:text-[15rem] font-black text-slate-100 select-none pointer-events-none -z-10 leading-none">
                PREMIUM
            </div>
        </section>
    );
};

export default ValuesSection;
