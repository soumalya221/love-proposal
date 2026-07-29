import { motion } from "framer-motion";

const timeline = [
  {
    title: "The First Time I Saw You ❤️",
    text: "That day, I didn't know you would become someone so special to me.",
  },
  {
    title: "Every Conversation 😊",
    text: "Talking with you always made my day brighter.",
  },
  {
    title: "Every Smile 🌸",
    text: "Your smile is one of my favorite things in this world.",
  },
  {
    title: "Today 💖",
    text: "Today, I just want to tell you how much you mean to me.",
  },
];

export default function Timeline({ onNext }) {
  return (
    <div className="timeline-page">
      <h1>Our Story ❤️</h1>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      <button className="next-btn" onClick={onNext}>
        Continue ❤️
      </button>
    </div>
  );
}