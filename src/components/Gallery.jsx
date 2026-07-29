import { motion } from "framer-motion";

const photos = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
];

export default function Gallery({ onNext }) {
  return (
    <div className="gallery-page">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Beautiful Memories ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="gallery-subtitle"
      >
        Every picture tells a story...
      </motion.p>

      <div className="gallery">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.25 }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
            }}
          >
            <img src={photo} alt="" />

            <p>Memory {index + 1} ❤️</p>

          </motion.div>
        ))}

      </div>

      <button
        className="next-btn"
        onClick={onNext}
      >
        Continue ❤️
      </button>

    </div>
  );
}