import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { brandData } from '../../data/brandData';

const Contact = () => {
    const { contact } = brandData;
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        if (!formRef.current) return;

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        // Create a service and a template.
        // The template should have variables like {{user_name}}, {{user_email}}, {{user_phone}}, {{message}}
        // that match the 'name' attributes of your input fields below.

        emailjs
            .sendForm(
                'service_i850hhi',
                'template_pijbcns',
                formRef.current,
                {
                    publicKey: '7irPBu4K2KvUbuo5I',
                }
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                    formRef.current?.reset();
                    // Clear success message after 5 seconds
                    setTimeout(() => setStatus({ type: null, message: '' }), 5000);
                },
                (error) => {
                    setLoading(false);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-20 bg-slate-900 text-white">
                <div className="container px-6 text-center">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Ready to start your journey? Our team is here to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-8">Head Offices</h2>
                                <div className="space-y-8">
                                    {contact.offices.map((office, idx) => (
                                        <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{office.city} Office</h3>
                                                <p className="text-slate-600 leading-relaxed max-w-xs">{office.address}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-6 bg-slate-900 text-white rounded-2xl">
                                    <Phone size={24} className="text-primary mb-4" />
                                    <h3 className="text-sm uppercase tracking-widest opacity-60 mb-1">Phone</h3>
                                    <p className="text-xl font-bold">{contact.phone}</p>
                                </div>

                                <div className="p-6 bg-slate-900 text-white rounded-2xl">
                                    <Mail size={24} className="text-primary mb-4" />
                                    <h3 className="text-sm uppercase tracking-widest opacity-60 mb-1">Email</h3>
                                    <p className="text-xl font-bold">{contact.email}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem]">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Name</label>
                                        <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone</label>
                                        <input type="tel" name="user_phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email</label>
                                    <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                                    <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                                {status.message && (
                                    <div className={`flex items-center gap-2 text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                        {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
