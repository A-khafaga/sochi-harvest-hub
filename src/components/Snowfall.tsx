import { Snowflake } from 'lucide-react';

const SNOWFLAKE_COUNT = 50;

const Snowfall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20" aria-hidden="true">
      {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.7 + 0.3, // 0.3 to 1.0
          transform: `scale(${Math.random() * 0.8 + 0.8})`, // 0.8x to 1.6x
        };
        return (
          <div
            key={i}
            className="absolute top-[-10%] animate-fall"
            style={style}
          >
            <Snowflake className="text-gray-300" />
          </div>
        );
      })}
    </div>
  );
};

export default Snowfall;