
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-in-down' | 'fade-slide-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-slide-in',
  delay = 0
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-800 ease-out',
        isIntersecting
          ? `animate-${animation}`
          : 'opacity-0 transform translate-y-8',
        className
      )}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
