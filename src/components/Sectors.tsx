import Reveal, { SectionHeader } from './Reveal';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const images = [
  '/images/sector-construction.jpg',
  '/images/sector-healthcare.jpg',
  '/images/sector-hospitality.jpg',
  '/images/sector-logistics.jpg',
  '/images/sector-energy.jpg',
  '/images/sector-facility.jpg',
];

export default function Sectors() {
  const { t } = useI18n();
  return (
    <section id="sectors" className="py-24 md:py-32 px-5 md:px-8 bg-surface/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader kicker={t.sectors.kicker} title={t.sectors.title} sub={t.sectors.sub} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.sectors.items.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a href="#contact" className="group relative block rounded-[1.75rem] overflow-hidden aspect-[4/5] ring-1 ring-line shadow-2xl shadow-black/25">
                <img
                  src={images[i]}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover photo-grade-dark transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-[#14100c]/30 to-[#14100c]/10 opacity-95 transition-opacity" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700" />
                <span className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <span className="font-display text-gold text-xs font-bold tracking-[0.25em]">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="mt-1.5 text-white text-xl md:text-2xl font-extrabold leading-snug">{s.title}</h3>
                      <p className="mt-2 text-white/70 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        {s.desc}
                      </p>
                    </div>
                    <span className="shrink-0 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all group-hover:bg-gold group-hover:text-[#1c1610] group-hover:border-gold rtl:-scale-x-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
