
import { Home, Users, TreeDeciduous, Award, Building2, Leaf, Briefcase, Heart } from 'lucide-react';
import { brandData } from '../../data/brandData';

const About = () => {
    const { founder, statistics, awards } = brandData;

    const statsIcons = {
        "Home": Home,
        "Users": Users,
        "TreeDeciduous": TreeDeciduous,
        "Briefcase": Briefcase
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900 z-0" />
                <div className="container relative z-10 px-6">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                            Building <span className="text-primary">Tomorrow’s India</span>, Today.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            A lifelong mission driven by inclusive growth, social responsibility, and rural transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Narrative */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                                Bridging the <span className="italic text-primary">Rural–Urban</span> Divide
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    At Sachin Bhosale Group, development goes beyond construction; it is about creating dignity,
                                    opportunity, and sustainable communities across Maharashtra.
                                </p>
                                <p>
                                    Through affordable housing, employment generation, education initiatives, and environmental stewardship,
                                    the group is committed to bridging the rural–urban divide. Every project reflects a deep understanding
                                    of grassroots realities and a belief that progress should reach the last mile.
                                </p>
                                <div className="pl-6 border-l-4 border-primary/20 italic text-slate-700">
                                    "{founder.philosophy}"
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {statistics.map((stat, index) => {
                                const Icon = statsIcons[stat.icon as keyof typeof statsIcons] || Home;
                                return (
                                    <div
                                        key={index}
                                        className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                                        <p className="text-slate-500 font-medium">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 md:py-32 bg-slate-900 text-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="container relative z-10 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visionary Leadership</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{founder.name}</h2>
                            <p className="text-xl text-slate-400">{founder.designation}</p>
                        </div>

                        <div className="grid md:grid-cols-12 gap-16 items-center">
                            {/* Profile Story */}
                            <div className="md:col-span-7 space-y-8 text-slate-300 leading-relaxed text-lg order-2 md:order-1">
                                <p>
                                    {founder.fullBio.split('Working as a vegetable vendor')[0]}
                                </p>
                                <p className="p-6 bg-white/5 rounded-xl border-l-4 border-primary italic text-slate-200">
                                    "From working as a vegetable vendor in his early years to founding Shivjal Group..."
                                </p>
                                <p>
                                    {founder.fullBio.split('vision for inclusive rural development.')[1] ||
                                        "He developed the values of resilience, discipline, and empathy—principles that continue to guide his leadership. Driven by the belief that every individual deserves housing, livelihood, dignity, and opportunity, he founded Shivjal Group to bring urban-standard living environments to rural and semi-urban regions, while preserving cultural identity."}
                                </p>

                                <div className="pt-8">
                                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <Award size={20} className="text-primary" /> Honors & Recognition
                                    </h4>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {awards.map((award, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {award}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Abstract Image Placeholder */}
                            <div className="md:col-span-5 relative order-1 md:order-2">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 relative group shadow-2xl skew-y-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black flex items-center justify-center text-slate-700">
                                        <Users size={80} className="opacity-20" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <div className="text-primary font-bold text-lg mb-1">Shivjal Group</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest">Founder & Chairman</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Impact Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">Community First</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Social Impact Initiatives</h2>
                        <p className="text-lg text-slate-600">
                            Empowering communities through housing, education, healthcare, and environmental stewardship.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Rural Housing", icon: Home, desc: "Building affordable RCC homes to provide dignity and safety." },
                            { title: "Employment", icon: Briefcase, desc: "Skill development programs and 'Earn & Grow Locally' initiatives." },
                            { title: "Environment", icon: Leaf, desc: "Planting 30+ Lakh trees and promoting sustainable practices." },
                            { title: "Education", icon: Building2, desc: "Vocational training and scholarships for rural youth." },
                            { title: "Healthcare", icon: Heart, desc: "Conducting health camps benefiting 25,000+ individuals." },
                            { title: "Culture", icon: Users, desc: "Preserving traditions through Annadan Seva and festivals." },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-slate-50 rounded-2xl group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
