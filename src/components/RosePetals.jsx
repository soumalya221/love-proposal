export default function RosePetals() {
  return (
    <div className="petals">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}