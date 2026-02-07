import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    // Configuration for the balls
    const balls = [
        // Small Blue/Indigo particles
        { id: 1, color: 'bg-blue-500/60', size: 'w-8 h-8', initial: { x: '10vw', y: '10vh' }, animate: { x: [0, 100, -50, 200, 0], y: [0, 150, 300, -50, 0] }, duration: 15, delay: 0 },
        { id: 2, color: 'bg-indigo-500/60', size: 'w-6 h-6', initial: { x: '80vw', y: '20vh' }, animate: { x: [0, -200, 50, -100, 0], y: [0, 100, -100, 200, 0] }, duration: 8, delay: 1 },
        { id: 3, color: 'bg-blue-400/50', size: 'w-10 h-10', initial: { x: '50vw', y: '50vh' }, animate: { x: [0, 150, -150, 100, 0], y: [0, -150, 150, -100, 0] }, duration: 12, delay: 2 },

        // Medium Dark/Black balls
        { id: 4, color: 'bg-gray-900/40', size: 'w-16 h-16', initial: { x: '20vw', y: '80vh' }, animate: { x: [0, 200, 400, -100, 0], y: [0, -200, -400, 100, 0] }, duration: 25, delay: 0 },
        { id: 5, color: 'bg-black/30', size: 'w-20 h-20', initial: { x: '70vw', y: '70vh' }, animate: { x: [0, -150, -300, 100, 0], y: [0, -100, 200, -150, 0] }, duration: 28, delay: 1 },

        // Small Accent splashes
        { id: 6, color: 'bg-accent/50', size: 'w-12 h-12', initial: { x: '90vw', y: '90vh' }, animate: { x: [0, -100, -200, 0], y: [0, -100, -50, 0] }, duration: 8, delay: 3 },
        { id: 7, color: 'bg-accent/40', size: 'w-8 h-8', initial: { x: '5vw', y: '40vh' }, animate: { x: [0, 100, 200, 0], y: [0, 100, -50, 0] }, duration: 7, delay: 0 },

        // Tiny scattered particles
        { id: 8, color: 'bg-gray-500/40', size: 'w-4 h-4', initial: { x: '30vw', y: '30vh' }, animate: { x: [0, 50, -50, 0], y: [0, 50, -50, 0] }, duration: 8, delay: 1 },
        { id: 9, color: 'bg-blue-300/40', size: 'w-5 h-5', initial: { x: '60vw', y: '60vh' }, animate: { x: [0, -50, 50, 0], y: [0, -50, 50, 0] }, duration: 9, delay: 2 },
        { id: 10, color: 'bg-gray-700/30', size: 'w-6 h-6', initial: { x: '40vw', y: '10vh' }, animate: { x: [0, 100, -100, 0], y: [0, 100, -100, 0] }, duration: 10, delay: 0 }
    ];

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {balls.map((ball) => (
                <motion.div
                    key={ball.id}
                    className={`absolute rounded-full mix-blend-multiply ${ball.color} ${ball.size}`}
                    style={{
                        top: ball.initial.y,
                        left: ball.initial.x,
                    }}
                    animate={ball.animate}
                    transition={{
                        duration: ball.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: ball.delay
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundAnimation;
