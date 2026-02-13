import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { brandData } from '../../data/brandData';
import heroVideo from '../../assets/images/LandingPageVid.mp4';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    const { content } = brandData.heroSection;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video with subtle parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content Area */}
            <div className="container relative z-10 px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ opacity }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-white/60 uppercase">
                            Ritusa Realty LLP • Established Trust
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight"
                    >
                        {content.headline.split(' ').map((word, i) => (
                            word.toLowerCase() === 'trust-led' ?
                                <span key={i} className="font-semibold">{word} </span> :
                                <span key={i} className="opacity-90">{word} </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
                    >
                        {content.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to={content.ctaPrimary.action}
                            className="group relative px-10 py-4 bg-white text-black rounded-full font-medium text-sm md:text-base transition-all hover:bg-white/90 active:scale-95"
                        >
                            <span className="flex items-center gap-2">
                                {content.ctaPrimary.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            to={content.ctaSecondary.action}
                            className="px-10 py-4 text-white font-medium text-sm md:text-base border border-white/20 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95"
                        >
                            {content.ctaSecondary.label}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Refined Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium rotate-0">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
                </div>
            </motion.div>

            {/* Bottom Fade Removed per request - preserving full screen video */}
        </section>
    );
};

export default Hero;
