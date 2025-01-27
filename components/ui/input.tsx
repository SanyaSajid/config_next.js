import * as React from "react";

export function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">{label}</label>
      <input {...props} className="border p-2 rounded-lg mt-1" />
    </div>
  );
}
