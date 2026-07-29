import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  return (
    <section className="hero">

      <motion.h1
        initial={{ opacity:0, y:-60 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        className="hero-title"
      >
        Hey, Beautiful ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
        className="hero-text"
      >
        I have something special for you...
      </motion.p>

      <motion.button

        whileHover={{ scale:1.1 }}

        whileTap={{ scale:.95 }}

        onClick={onStart}

        className="start-btn"
      >
        Open Your Surprise ❤️
      </motion.button>

    </section>
  );
}