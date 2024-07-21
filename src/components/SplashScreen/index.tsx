import React from "react";
import { motion } from "framer-motion";

type Props = {
    quote: string;
    author: string;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0, staggerChildren: 0.5 } },
    exit: { opacity: 1, y: -1000, transition: { duration: 0.5 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0 }
};

const SplashScreen: React.FC<Props> = ({ quote, author }) => {
    return (
        <motion.div
            className="fixed flex h-[100vh] w-[100%] bg-black text-white z-55 justify-center items-center overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <motion.div
                className="flex flex-col gap-4  font-semibold font-serif text-center"
                variants={containerVariants}
            >
                <motion.p className="text-3xl" variants={itemVariants}>{quote}</motion.p>
                <motion.p className="font-thin text-sm" variants={itemVariants}>- {author}</motion.p>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
