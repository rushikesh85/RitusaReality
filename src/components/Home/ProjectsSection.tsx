import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { brandData } from '../../data/brandData';

const ProjectsSection = () => {
    const { projects } = brandData;
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="py-32 lg:py-52 bg-white relative overflow-hidden" id="projects">

            {/* Bonding Element: Floating Blur */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-primary" />
                            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Elite Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                            Architectural <br /> <span className="text-slate-200">Excellence.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <a href="/projects" className="group p-8 bg-slate-900 rounded-[2rem] text-white flex items-center gap-6 hover:bg-primary transition-all duration-500 shadow-2xl">
                            <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">Explore All Projects</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                                <ArrowUpRight size={20} />
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {projects.featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            style={{ y: index === 1 ? yParallax : 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`lg:col-span-${index === 2 ? '12' : index === 0 ? '7' : '5'} flex flex-col`}
                        >
                            <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_45px_90px_rgba(0,0,0,0.12)] transition-all duration-700 border border-slate-100 flex flex-col">
                                {/* Image Container */}
                                <div className={`relative ${index === 2 ? 'aspect-[21/9] min-h-[350px]' : 'aspect-square lg:aspect-[16/10]'} overflow-hidden`}>
                                    <div className="absolute inset-0 bg-slate-100" />
                                    <img
                                        src={`https://images.pexels.com/photos/${index === 0 ? '463996' : index === 1 ? '106399' : '302769'}/pexels-photo-${index === 0 ? '463996' : index === 1 ? '106399' : '302769'}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute top-6 left-6">
                                        <div className="py-2 px-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.type}</span>
                                        </div>
                                    </div>

                                    {/* Overlay Info */}
                                    <div className="absolute bottom-10 left-10 right-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-3xl lg:text-4xl font-black mb-3 tracking-tighter leading-none">{project.name}</h4>
                                        <div className="flex items-center gap-3 opacity-90">
                                            <MapPin size={18} className="text-primary" />
                                            <span className="text-sm font-bold tracking-[0.2em] uppercase">{project.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Details Below */}
                                <div className="p-10 lg:p-14 flex flex-col justify-between flex-grow">
                                    <p className="text-slate-600 leading-relaxed font-light mb-12 max-w-2xl text-lg">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300">Project Archetype</span>
                                        <div className="flex items-center gap-6">
                                            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
                                            <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Aesthetic Finish: Vertical Line */}
            <div className="absolute bottom-0 left-1/2 w-[1px] h-32 bg-gradient-to-t from-slate-200 to-transparent -translate-x-1/2" />
        </section>
    );
};

export default ProjectsSection;
