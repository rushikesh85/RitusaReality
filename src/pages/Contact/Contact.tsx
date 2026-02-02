import { useState, type FormEvent } from 'react';

import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                publicKey
            );

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Email send error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl text-slate-600">
                        Get in touch with us for any queries or property inquiries
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl md:text-3xl mb-8">Get In Touch</h2>

                        <div className="space-y-6">
                            <div className="p-4 md:p-6 bg-slate-50 rounded-xl">
                                <h3 className="text-primary mb-2 text-lg md:text-xl">📧 Email</h3>
                                <p className="text-slate-600">info@ritusareality.com</p>
                            </div>

                            <div className="p-4 md:p-6 bg-slate-50 rounded-xl">
                                <h3 className="text-primary mb-2 text-lg md:text-xl">📞 Phone</h3>
                                <p className="text-slate-600">+91 XXX XXX XXXX</p>
                            </div>

                            <div className="p-4 md:p-6 bg-slate-50 rounded-xl">
                                <h3 className="text-primary mb-2 text-lg md:text-xl">📍 Address</h3>
                                <p className="text-slate-600">
                                    Your Address Here<br />
                                    City, State - PIN
                                </p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <h2 className="text-2xl md:text-3xl mb-8">Send us a Message</h2>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 font-medium text-slate-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-slate-700">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-lg text-center font-medium">
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-4 bg-red-50 text-red-800 rounded-lg text-center font-medium">
                                    ✗ Failed to send message. Please try again or contact us directly.
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
