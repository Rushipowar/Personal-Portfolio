import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const journey = [
    {
        type: "education",
        role: "FullStack Web Development",
        place: "PW Skills, India",
        period: "2023 - 2024",
        description: "Comprehensive Bootcamp covering MERN stack (MongoDB, Express, React, Node.js), system design, and deployment."
    },
    {
        type: "job",
        role: "Content Writer",
        place: "Team Everest NGO",
        period: "March '24 - Feb '24",
        description: "Created content that combined educational objectives with engaging gameplay to facilitate learning through play. Developed educational games for children aged 7-8 years to enhance their English language skills. Ensured all games were age-appropriate, engaging, and aligned with educational goals."
    },
    {
        type: "education",
        role: "10th Standard (92.20%)",
        place: "Savitribai Phule High School Tarale, India",
        period: "2019 - 2020",
        description: "Completed secondary education with high academic standing."
    }
];

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <SectionWrapper id="experience" className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                <p className="text-gray-500">Education & Professional Path.</p>
            </div>

            <div ref={ref} className="relative ml-3 md:ml-6 space-y-12 pb-4">
                {/* Static Background Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />

                {/* Animated Progress Line */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent origin-top"
                />

                {journey.map((item, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Dot on the line */}
                        <span className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full ring-4 ring-white z-10 ${item.type === 'job' ? 'bg-accent' : 'bg-green-500'}`}></span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <span className="text-sm font-mono text-gray-500 bg-gray-50 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                {item.period}
                            </span>
                        </div>

                        <div className="text-lg font-medium text-gray-700 mb-2">{item.place}</div>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
