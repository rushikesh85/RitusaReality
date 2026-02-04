import { motion } from 'framer-motion';
import { brandData } from '../../data/brandData';
import { MapPin, ArrowUpRight, Building2, Trees, Home } from 'lucide-react';

const Projects = () => {
    const { projects } = brandData;

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-20 bg-slate-900 text-white">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Landscapes</h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Discover our range of townships, residential plots, and commercial developments across Maharashtra.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 lg:py-32">
                <div className="container px-6">
                    <div className="space-y-32">
                        {projects.featuredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                        {/* Tag */}
                                        <div className="absolute top-8 left-8">
                                            <div className="py-2 px-5 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                                                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                                    {project.type.includes('Township') ? <Building2 size={14} /> :
                                                        project.type.includes('Plots') ? <Trees size={14} /> : <Home size={14} />}
                                                    {project.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{project.name}</h2>
                                    <div className="flex items-center gap-3 text-slate-500 mb-8">
                                        <MapPin size={20} className="text-primary" />
                                        <span className="text-lg font-medium tracking-wide uppercase">{project.location}</span>
                                    </div>

                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-slate-100 pl-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-primary transition-colors shadow-lg">
                                            View Details <ArrowUpRight size={18} />
                                        </button>
                                        <button className="px-8 py-4 border border-slate-200 text-slate-900 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-slate-50 transition-colors">
                                            Book Site Visit
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
