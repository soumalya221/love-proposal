import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveLetter({ onNext }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="letter-container">

      {/* Envelope */}
      {!open && (
        <motion.div
          className="envelope"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
        >
          <div className="envelope-icon">💌</div>
          <h2>You've Got a Letter</h2>
          <p>Tap to Open ❤️</p>
        </motion.div>
      )}

      {/* Letter */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="letter"
            initial={{ scale: 0.5, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Dear ❤️</h2>

            <p>
              Maybe I never had enough courage to tell you this...
            </p>

            <p>
              Every time you smile, my whole day becomes better.
            </p>

            <p>
              Every conversation with you becomes one of my favorite memories.
            </p>

            <p>
              You are more special than you probably realize.
            </p>

            <p>
              Today I wanted to tell you something from my heart...
            </p>

            <h3>I really like you ❤️</h3>

            <button className="next-btn" onClick={onNext}>
              See Something Beautiful ❤️
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}