const About = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="mb-4">About RitusaReality</h1>
                    <p className="text-xl md:text-2xl text-slate-600">
                        Your trusted partner in real estate since [Year]
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-primary mb-6">Our Story</h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                            RitusaReality was founded with a vision to revolutionize the real estate
                            experience. We believe in transparency, integrity, and delivering exceptional
                            value to our clients.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            With years of experience in the industry, we have helped countless families
                            and businesses find their perfect space. Our commitment to excellence and
                            customer satisfaction sets us apart.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-primary mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            To provide premium real estate solutions that exceed expectations and create
                            lasting value for our clients. We strive to make property transactions smooth,
                            transparent, and rewarding.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-primary mb-6">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border-l-4 border-primary">
                                <h3 className="text-primary mb-3">Integrity</h3>
                                <p className="text-slate-600">
                                    We operate with honesty and transparency in all our dealings.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border-l-4 border-primary">
                                <h3 className="text-primary mb-3">Excellence</h3>
                                <p className="text-slate-600">
                                    We are committed to delivering the highest quality service.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border-l-4 border-primary">
                                <h3 className="text-primary mb-3">Innovation</h3>
                                <p className="text-slate-600">
                                    We embrace new technologies and methods to serve you better.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl border-l-4 border-primary">
                                <h3 className="text-primary mb-3">Customer Focus</h3>
                                <p className="text-slate-600">
                                    Your satisfaction is our top priority in everything we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
