import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { FiSend, FiPhone } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:powarrushi02@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <SectionWrapper id="contact" className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-500 mb-8">
                    Have a project in mind or want to say hello? I'd love to hear from you.
                </p>

                <div className="flex justify-center gap-4 mb-8">
                    <a
                        href="https://wa.me/918378957472"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
                    >
                        <i className="text-xl"><FiPhone /></i>
                        Chat on WhatsApp
                    </a>
                </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <Button className="w-full md:w-auto min-w-[200px] justify-center">
                            Send Message <FiSend size={18} />
                        </Button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
