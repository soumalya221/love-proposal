import { motion } from "framer-motion";

export default function Celebration() {
  return (
    <div className="celebration-page">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 SHE SAID YES! 🎉
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ❤️ You made me the happiest person in the world ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Thank you for making this journey so beautiful.
      </motion.p>

      <motion.div
        className="big-heart"
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        ❤️
      </motion.div>

    </div>
  );
}