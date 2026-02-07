import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center -mt-16">
            <div className="text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white shadow-xl"
                >
                    <img
                        src={profileImg}
                        alt="Rushikesh Nandkumar Powar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-accent font-medium mb-4 text-lg"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary"
                >
                    Rushikesh Nandkumar Powar
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-500 mb-8 font-light"
                >
                    Building digital experiences with <span className="text-primary font-medium">clarity</span> and <span className="text-primary font-medium">purpose</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    I'm a Full Stack Developer specializing in building exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Button href="#projects" variant="primary">
                        View Projects <FiArrowRight />
                    </Button>
                    <Button href="#contact" variant="secondary">
                        Contact Me <FiMail />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-center gap-6"
                >
                    <a href="https://github.com/Rushipowar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2">
                        <FiGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/rushikesh-nandkumar-powar-9848a4259/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2">
                        <FiLinkedin size={24} />
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
