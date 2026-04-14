interface WaveDividerProps {
  nextBg: string;
}

export default function WaveDivider({ nextBg }: WaveDividerProps) {
  return (
    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
  );
}