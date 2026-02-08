import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: "ComicCraftAi",
        subtitle: "AI Comic Book Creation Platform • Jan '26",
        description: "Developed a full-stack AI-powered comic book platform that allows users to create, edit, and read interactive comic books. The platform leverages Nano Banana AI for script editing and image generation, with Supabase handling authentication and database management.",
        details: [
            "AI Comic Generation: Integrated Nano Banana AI to generate comic scripts, edit storylines, modify dialogues, and create AI-generated comic images.",
            "Story & Character Management: Enabled creation of comics with multiple parts, plots, characters, and genres for structured storytelling.",
            "Authentication & Database: Implemented Supabase authentication and database integration for secure user accounts and content storage.",
            "Dynamic Categories: Built category-based comic browsing for easy discovery and improved user engagement.",
            "Editing: Edit the Comic by specific pages and regenerate images with editing canvas.",
            "Modern UI/UX: Designed a responsive and intuitive interface using custom development and vibe coding techniques."
        ],
        tech: ["React", "Nano Banana AI", "Supabase", "Tailwind"],
        github: "https://github.com/Rushipowar/ComicCraftAi",
        live: "https://comic-craft-ai-baxt.vercel.app/"
    },
    {
        title: "NovaWave",
        subtitle: "AI Novel & Story Writing Platform • Nov '25",
        description: "Developed an AI-powered platform for novelists and story writers to create, edit, and manage stories in multiple languages. NovaWave enables writers to build structured narratives using plots, genres, characters, locations, and episodic storytelling, with support for story series and continuations.",
        details: [
            "Multi-Language Story Creation: Enabled writers to create novels and stories in multiple languages with AI-assisted content generation.",
            "Plot & Character Builder: Implemented structured story creation using plots, genres, characters, locations, and themes.",
            "Story Editing Tools: Added advanced editing features for story text, characters, icons, emojis, and formatting to enhance creativity.",
            "Episodes & Series Management: Supported episodic storytelling, story continuation, and series-based novel creation.",
            "Authentication & Database: Integrated Supabase authentication and database for secure user access and persistent story storage.",
            "Writer-Focused UI/UX: Designed a clean, distraction-free writing interface optimized for long-form storytelling."
        ],
        tech: ["React", "Supabase", "AI", "Tailwind"],
        github: "https://github.com/Rushipowar/NovaWave",
        live: "https://nova-wave-bx9r.vercel.app/"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-500">Some of the things I've built.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="group relative flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                        {/* Default Content */}
                        <div className="flex flex-col h-full p-6 transition-opacity duration-300 group-hover:opacity-0">
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            {project.subtitle && <p className="text-xs text-accent font-medium mb-3">{project.subtitle}</p>}
                            <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                                {project.description}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-mono px-2 py-1 bg-gray-50 rounded text-gray-500">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                                    <FiGithub /> Source
                                </a>
                                <a href={project.live} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Hover Overlay (Glassy White Background) */}
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-gray-900 overflow-y-auto">
                            <h3 className="text-xl font-bold mb-1 text-accent">{project.title}</h3>
                            {project.subtitle && <p className="text-xs text-gray-500 font-medium mb-4">{project.subtitle}</p>}

                            {project.details ? (
                                <ul className="space-y-3 text-sm text-gray-700 list-disc pl-4">
                                    {project.details.map((detail, i) => {
                                        const [label, desc] = detail.split(': ');
                                        return (
                                            <li key={i}>
                                                <strong className="text-gray-900">{label}:</strong> {desc}
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p className="text-gray-700">{project.description}</p>
                            )}
                            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-accent transition-colors">
                                    <FiGithub /> Source
                                </a>
                                <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-accent transition-colors">
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;

