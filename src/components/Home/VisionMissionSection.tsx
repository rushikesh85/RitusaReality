import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { brandData } from '../../data/brandData';

const VisionMissionSection = () => {
    const { visionMission } = brandData;

    return (
        <section className="py-0 overflow-hidden bg-white border-y border-slate-100/50">
            <div className="flex flex-col lg:flex-row lg:min-h-[650px] items-stretch">

                {/* Vision Panel - Elegant & Airy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-white relative group border-b lg:border-b-0 lg:border-r border-slate-100 self-stretch overflow-hidden"
                >
                    <div className="max-w-lg relative z-10 mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/20 transition-transform group-hover:scale-110 duration-500 shadow-sm">
                                <Eye size={24} strokeWidth={1.5} />
                            </div>
                            <span className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase">Strategic Intent</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
                            Our <span className="text-primary italic">Vision.</span>
                        </h2>

                        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed tracking-tight border-l-2 border-primary/20 pl-8 ml-1 italic">
                            "{visionMission.vision}"
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.02)_0%,transparent_50%)] pointer-events-none" />
                </motion.div>

                {/* Mission Panel - Bold & Driven */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden self-stretch"
                >
                    <div className="max-w-lg relative z-10 mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 transition-transform group-hover:scale-110 duration-500 shadow-lg">
                                <Target size={24} strokeWidth={1.5} />
                            </div>
                            <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase">Actionable Values</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-[0.95] tracking-tighter">
                            Our <span className="text-primary">Mission.</span>
                        </h2>

                        <ul className="space-y-6 lg:space-y-8">
                            {visionMission.mission.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="mt-1.5 text-primary font-black text-lg tracking-tighter opacity-100 transition-all group-hover:scale-110">0{index + 1}</div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-tight transition-colors group-hover:text-primary">
                                            {item}
                                        </span>
                                        <div className="w-0 h-[1.5px] bg-primary/40 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />
                    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
};

export default VisionMissionSection;
