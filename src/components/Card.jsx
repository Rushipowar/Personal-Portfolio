import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
    return (
        <motion.div
            className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${className}`}
            whileHover={{ y: -5, shadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
