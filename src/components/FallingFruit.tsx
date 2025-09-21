import { Apple } from 'lucide-react';

const FRUIT_COUNT = 15;

const FallingFruit = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20" aria-hidden="true">
      {Array.from({ length: FRUIT_COUNT }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 4}s`, // 4s to 7s
          animationDelay: `${Math.random() * 5}s`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`, // 0.5x to 1.0x
          opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
        };
        return (
          <div
            key={i}
            className="absolute top-[-10%] animate-fall"
            style={style}
          >
            <Apple className="text-red-500" />
          </div>
        );
      })}
    </div>
  );
};

export default FallingFruit;