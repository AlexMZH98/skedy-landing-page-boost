
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-in-down' | 'fade-slide-in' | 'zoom-in' | 'bounce-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-slide-in',
  delay = 0
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-100px'
  });

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out will-change-transform',
        isIntersecting
          ? `animate-${animation} opacity-100`
          : 'opacity-0 transform translate-y-16 scale-95',
        className
      )}
      style={{
        animationDelay: isIntersecting ? `${delay}ms` : '0ms',
        animationFillMode: 'both'
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
