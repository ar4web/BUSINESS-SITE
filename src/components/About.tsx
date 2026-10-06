import Reveal from './Reveal';
import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '../lib/i18n';

export default function About() {
  const { t, lang } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold/25 to-transparent blur-2xl" />
            <img
              src="/images/about.jpg"
              alt="Masar leadership"
              className="relative rounded-[2rem] w-full aspect-[4/3] object-cover shadow-2xl shadow-black/30 ring-1 ring-line"
            />
            <div className="absolute -bottom-6 -end-4 md:-end-8 glass rounded-2xl px-6 py-4 shadow-xl ring-1 ring-green/30">
              <div className="flex items-center gap-2">
                <span className="ornament-star inline-block h-4 w-4" />
                <span className="font-display text-2xl font-extrabold text-green">2030</span>
              </div>
              <div className="text-muted text-xs font-semibold tracking-wide">{t.about.badge}</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="ornament-star inline-block h-3.5 w-3.5 opacity-80" />
              <span className="font-display text-gold tracking-[0.25em] uppercase text-xs font-bold">{t.about.kicker}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">{t.about.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted text-lg leading-relaxed">{t.about.p1}</p>
            <p className="mt-4 text-muted text-lg leading-relaxed">{t.about.p2}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              dir={lang === 'en' ? 'rtl' : 'ltr'}
              className="relative mt-7 overflow-hidden rounded-2xl border border-gold/25 bg-gold/5 px-6 py-5"
            >
              <div className="divider-sadu absolute inset-x-0 top-0 h-2.5" />
              <h3 className="font-arabic text-gold text-2xl md:text-3xl leading-relaxed">
                {t.about.arTitle}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{t.about.arText}</p>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {t.about.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-ink/90">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
