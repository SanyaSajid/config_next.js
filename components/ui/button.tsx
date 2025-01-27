import * as React from "react";

export function Button({ children, className, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={` bg-white text-black px-4 py-2 rounded-xl ${className}`}>
      {children}
    </button>
  );
}
