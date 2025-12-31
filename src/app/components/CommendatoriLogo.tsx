interface LogoProps {
  variant?: 'full' | 'wordmark' | 'symbol';
  color?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CommendatoriLogo({ 
  variant = 'full', 
  color = 'dark',
  size = 'md' 
}: LogoProps) {
  const colors = {
    dark: '#1A1614',
    light: '#F5F3F0',
    gold: '#B8956A'
  };

  const sizes = {
    sm: { wordmark: 'text-2xl', symbol: 32 },
    md: { wordmark: 'text-4xl', symbol: 48 },
    lg: { wordmark: 'text-6xl', symbol: 72 },
    xl: { wordmark: 'text-8xl', symbol: 96 }
  };

  const currentColor = colors[color];
  const currentSize = sizes[size];

  // Abstract two-finger gesture symbol - highly geometric and architectural
  const Symbol = () => (
    <svg 
      width={currentSize.symbol} 
      height={currentSize.symbol} 
      viewBox="0 0 100 100" 
      fill="none"
      className="shrink-0"
    >
      {/* Index and pinky finger pointing - spread apart and angled */}
      {/* Index finger (top) - angling slightly upward */}
      <path 
        d="M 20 45 L 75 28 L 77 30.5 L 22 47.5 Z" 
        fill={currentColor}
      />
      
      {/* Pinky finger (bottom) - angling slightly downward */}
      <path 
        d="M 20 55 L 75 70 L 77 67.5 L 22 52.5 Z" 
        fill={currentColor}
      />
      
      {/* Palm/hand base - subtle anchor point where fingers originate */}
      <circle 
        cx="19" 
        cy="50" 
        r="4.5" 
        fill={currentColor}
        opacity="0.5"
      />
      
      {/* Very subtle middle fingers suggestion (folded/down) - optional architectural detail */}
      <line 
        x1="22" 
        y1="50" 
        x2="35" 
        y2="50" 
        stroke={currentColor} 
        strokeWidth="1.5"
        opacity="0.2"
      />
    </svg>
  );

  if (variant === 'symbol') {
    return <Symbol />;
  }

  if (variant === 'wordmark') {
    return (
      <h1 
        className={`${currentSize.wordmark} tracking-widest font-light`}
        style={{ 
          fontFamily: 'Cormorant Garamond, serif',
          color: currentColor,
          letterSpacing: '0.15em'
        }}
      >
        COMMENDATORI
      </h1>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <Symbol />
      <h1 
        className={`${currentSize.wordmark} tracking-widest font-light`}
        style={{ 
          fontFamily: 'Cormorant Garamond, serif',
          color: currentColor,
          letterSpacing: '0.15em'
        }}
      >
        COMMENDATORI
      </h1>
    </div>
  );
}