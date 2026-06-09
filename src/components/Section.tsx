import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export const Section = ({ id, className, children, containerClassName }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => {
  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", centered && "mx-auto text-center")}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("w-20 h-1.5 bg-primary mt-6 rounded-full", centered && "mx-auto")} />
    </div>
  );
};
