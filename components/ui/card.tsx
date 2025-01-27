import * as React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={` rounded-lg p-4  ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
