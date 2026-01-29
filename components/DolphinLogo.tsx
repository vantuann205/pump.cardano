import React from 'react';

interface DolphinLogoProps {
  className?: string;
  size?: number;
}

const DolphinLogo: React.FC<DolphinLogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Cá heo chính */}
        <path
          d="M15 45C15 35 25 25 40 25C55 25 75 35 85 45C90 50 88 55 85 58C80 62 70 65 55 65C45 65 35 62 25 58C20 55 15 50 15 45Z"
          fill="url(#dolphinGradient)"
          stroke="#0369a1"
          strokeWidth="1.5"
        />
        
        {/* Đuôi cá heo */}
        <path
          d="M15 45C10 40 8 35 12 30C16 25 20 28 22 35C20 40 17 42 15 45Z"
          fill="url(#tailGradient)"
          stroke="#0369a1"
          strokeWidth="1.5"
        />
        
        {/* Vây lưng */}
        <path
          d="M45 25C48 20 52 18 55 22C58 26 55 30 50 32C47 30 45 27 45 25Z"
          fill="url(#finGradient)"
          stroke="#0369a1"
          strokeWidth="1.5"
        />
        
        {/* Vây bụng */}
        <path
          d="M35 55C38 60 42 62 45 58C48 54 45 50 40 48C37 50 35 52 35 55Z"
          fill="url(#finGradient)"
          stroke="#0369a1"
          strokeWidth="1.5"
        />
        
        {/* Mắt */}
        <circle cx="70" cy="42" r="4" fill="#1e40af" />
        <circle cx="72" cy="40" r="1.5" fill="white" />
        
        {/* Mũi/mỏ */}
        <ellipse cx="85" cy="48" rx="3" ry="2" fill="#0369a1" />
        
        {/* Sóng nước trang trí */}
        <path
          d="M20 75C25 72 30 75 35 72C40 75 45 72 50 75C55 72 60 75 65 72C70 75 75 72 80 75"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M15 82C20 79 25 82 30 79C35 82 40 79 45 82C50 79 55 82 60 79C65 82 70 79 75 82"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="dolphinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          
          <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          
          <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" opacity="0.6" />
            <stop offset="50%" stopColor="#0284c7" opacity="0.8" />
            <stop offset="100%" stopColor="#0369a1" opacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DolphinLogo;