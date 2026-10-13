"use client";

export default function TextShimmer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-sg-blue via-white to-sg-green bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] ${className}`}
      style={{
        animationName: "shimmer",
      }}
    >
      {children}
    </span>
  );
}
