import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', href }) => {
    const baseStyle = "px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 hover:shadow-lg",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
        outline: "border border-gray-300 text-gray-600 hover:border-primary hover:text-primary",
    };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </Component>
    );
};

export default Button;
