interface WaveDividerProps {
  nextBg: string;
}

export default function WaveDivider({ nextBg }: WaveDividerProps) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,25 1440,20 L1440,60 L0,60 Z"
        fill={nextBg}
      />
    </svg>
  );
}
