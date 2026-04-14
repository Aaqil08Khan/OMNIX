interface WaveDividerProps {
  nextBg?: string;
  flip?: boolean;
}

export default function WaveDivider({ nextBg, flip }: WaveDividerProps) {
  return (
    <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
  );
}