import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  kicker,
  title,
  sub,
  center = true,
}: {
  kicker: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
        <span className="ornament-star inline-block h-3.5 w-3.5 opacity-80" />
        <span className="font-display text-gold tracking-[0.25em] uppercase text-xs font-bold">{kicker}</span>
        <span className="ornament-star inline-block h-3.5 w-3.5 opacity-80" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" />
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
      {center && <div className="divider-sadu mx-auto mt-5 w-44" />}
      {sub && <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">{sub}</p>}
    </Reveal>
  );
}
