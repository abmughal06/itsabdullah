import Image from 'next/image';
import React from 'react';

interface LogoSliderProps {
  logos: string[];
  direction: 'left' | 'right';
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos, direction }) => {
  const animationName = direction === 'left' ? 'scrollLeft' : 'scrollRight';
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';
  const keyframes = `
    @keyframes ${animationName} {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <div className="overflow-hidden py-10">
      <style>{keyframes}</style>
      <div
        className="flex items-center"
        style={{
          animation: `${animationName} 30s linear infinite`,
          animationDirection: animationDirection,
          whiteSpace: 'nowrap',
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <Image width={80} height={80} src={logo} alt={`Logo ${index + 1}`} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
