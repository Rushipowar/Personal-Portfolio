import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript,
    SiReact, SiNodedotjs, SiMongodb, SiGithub,
    SiGoogleanalytics
} from 'react-icons/si';
import { FaBullhorn, FaLightbulb, FaPenNib, FaAws } from 'react-icons/fa';
import { IoTrendingUpOutline, IoStatsChart } from 'react-icons/io5';

const skillsData = [
    {
        category: "Development",
        skills: [
            { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            { name: "React", icon: <SiReact className="text-cyan-400" /> },
            { name: "NodeJS", icon: <SiNodedotjs className="text-green-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "AWS (Basics)", icon: <FaAws className="text-orange-500" /> },
            { name: "Git & Github", icon: <SiGithub className="text-gray-800" /> }
        ]
    },
    {
        category: "Business & Strategy",
        skills: [
            { name: "Business Strategy & Growth", icon: <IoTrendingUpOutline className="text-blue-500" /> },
            { name: "Market Analysis", icon: <IoStatsChart className="text-green-500" /> },
            { name: "Entrepreneurship", icon: <FaLightbulb className="text-yellow-500" /> },
            { name: "Digital Marketing", icon: <FaBullhorn className="text-red-500" /> }
        ]
    },
    {
        category: "Content & Analytics",
        skills: [
            { name: "Content Writing", icon: <FaPenNib className="text-indigo-500" /> },
            { name: "Google Analytics", icon: <SiGoogleanalytics className="text-orange-500" /> }
        ]
    }
];

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-gray-50/50">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                <p className="text-gray-500">The technologies and tools I work with.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {skillsData.map((group, index) => (
                    <Card key={index} className="h-full">
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-gray-100 text-sm rounded-full text-gray-700 border border-transparent flex items-center gap-2 hover:bg-white hover:shadow-sm transition-all"
                                >
                                    <span className="text-lg">{skill.icon}</span>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
