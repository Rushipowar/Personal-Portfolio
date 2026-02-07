import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-12 h-[2px] bg-accent inline-block"></span> About Me
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            I am a passionate software engineer with a keen eye for design.
                            My journey started with a curiosity for how things work on the web,
                            and it has evolved into a career of building robust, scalable applications.
                        </p>
                        <p>
                            I believe in minimalism and functionality. Whether I'm designing a UI
                            or architecting a backend, I strive for simplicity and efficiency.
                        </p>
                        <p>
                            When I'm not coding, you can find me Entrepreneurship, Marketing, Content Writing or exploring new technologies.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Journey Highlight</h3>
                    <ul ref={ref} className="space-y-6 ml-2 pl-6 relative">
                        {/* Static Background Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100" />

                        {/* Animated Progress Line */}
                        <motion.div
                            style={{ scaleY }}
                            className="absolute left-0 top-0 bottom-0 w-0.5 bg-black origin-top"
                        />

                        <li className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white z-10"></span>
                            <h4 className="font-semibold">Full Stack Developer</h4>
                            <p className="text-sm text-gray-500">PW Skills • 2023 - 2025</p>
                        </li>
                        <li className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white z-10"></span>
                            <h4 className="font-semibold">Content Writer</h4>
                            <p className="text-sm text-gray-500">Team Everest NGO • March '24</p>
                        </li>
                        <li className="relative">
                            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white z-10"></span>
                            <h4 className="font-semibold">Secondary Education</h4>
                            <p className="text-sm text-gray-500">Savitribai Phule High School • 2019 - 2020</p>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
