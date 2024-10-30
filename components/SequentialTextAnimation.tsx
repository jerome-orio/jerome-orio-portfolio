import React from 'react';

interface SequentialTextAnimationProps {
  text: string;
  animationName?: string; // Dynamic animation name
  duration?: number; // Duration in milliseconds
  delayIncrement?: number; // Delay increment per letter in milliseconds
}

const SequentialTextAnimation: React.FC<SequentialTextAnimationProps> = ({
  text,
  animationName = 'blurIn', // Default animation
  duration = 1000, // Default duration
  delayIncrement = 100, // Default delay increment
}) => {
  return (
    <div>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block animate-${animationName} will-change-transform`} // Use dynamic animation
          style={{
            animationDuration: `${duration}ms`,
            animationDelay: `${index * delayIncrement}ms`,
            opacity: 0,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter} {/* Non-breaking space for proper spacing */}
        </span>
      ))}
    </div>
  );
};

export default SequentialTextAnimation;
