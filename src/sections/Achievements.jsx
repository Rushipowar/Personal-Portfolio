import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certificates = [
    {
        title: "FullStack Web Development",
        issuer: "PW Skills",
        year: "2023 - 2025",
        desc: "1 Year Fullstack (MERN) Web Development Bootcamp",
        link: "https://pwskills.com/learn/certificate/a3ad813f-a9c1-4f7e-8713-882563e1a3f1/"
    },
    {
        title: "The Complete Web Development Bootcamp",
        issuer: "Udemy (Angela Yu)",
        year: "2023",
        desc: "MERN Stack Web Development Bootcamp",
        link: "https://www.udemy.com/certificate/UC-61e413c8-474b-4f8b-bda8-a2c76058c49d/"
    },
    {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "AWS",
        year: "2024",
        desc: "Cloud Computing, Storage, and Deployment basics",
        link: "https://www.credly.com/badges/8cbcdcd8-5f9e-497a-a810-dbf85996d816/linked_in_profile"
    },
    {
        title: "React.js",
        issuer: "Scaler",
        year: "2024",
        desc: "React with Project-based learnings",
        link: "https://moonshot.scaler.com/s/sl/9ANhuTTBvF?_gl=1*emjw5i*_ga*MTI2NjQxNzU4LjE3MDEzNDU1MTY.*_ga_53S71ZZG1X*MTcwODk0NjAwMi4zMS4xLjE3MDg5NDcxNTMuNTcuMC4w"
    },
    {
        title: "Digital Marketing",
        issuer: "Beep",
        year: "2025",
        desc: "SEO, Content Creation, Ads, Email Marketing",
        link: "#"
    }
];

const Achievements = () => {
    return (
        <SectionWrapper id="achievements" className="bg-gray-50/50">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
                <p className="text-gray-500">Milestones in my learning journey.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <Card key={index} className="h-full flex flex-col group relative overflow-hidden">
                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                                <FiAward size={24} />
                            </div>
                            <span className="text-xs font-mono text-gray-400 border border-gray-100 px-2 py-1 rounded">
                                {cert.year}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold mb-1 relative z-10">{cert.title}</h3>
                        <div className="text-accent font-medium text-sm mb-3 relative z-10">{cert.issuer}</div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-4 relative z-10">
                            {cert.desc}
                        </p>

                        {cert.link && cert.link !== '#' && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline relative z-10"
                            >
                                View Certificate <FiExternalLink size={14} />
                            </a>
                        )}
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
