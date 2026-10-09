import Reveal, { SectionHeader } from './Reveal';
import { useI18n } from '../lib/i18n';

const photos = [
  { src: '/images/ops-warehouse.jpg', span: 'col-span-2 md:col-span-2 md:row-span-2' },
  { src: '/images/ops-dining.jpg', span: 'col-span-2 md:col-span-2 md:row-span-1' },
  { src: '/images/ops-assembly.jpg', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { src: '/images/ops-office.jpg', span: 'col-span-1 md:col-span-1 md:row-span-1' },
  { src: '/images/ops-truck.jpg', span: 'col-span-2 md:col-span-2 md:row-span-1' },
  { src: '/images/ops-fabrication.jpg', span: 'col-span-2 md:col-span-2 md:row-span-1' },
  { src: '/images/ops-facility.jpg', span: 'col-span-2 md:col-span-1 md:row-span-1' },
  { src: '/images/ops-forklift.jpg', span: 'col-span-2 md:col-span-2 md:row-span-1' },
  { src: '/images/ops-barista.jpg', span: 'col-span-2 md:col-span-1 md:row-span-1' },
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-8 bg-surface/60 overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader kicker={t.gallery.kicker} title={t.gallery.title} sub={t.gallery.sub} />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] md:auto-rows-[215px] gap-3 md:gap-4">
          {photos.map((p, i) => {
            const item = t.gallery.items[i];
            return (
              <Reveal key={i} delay={i * 0.07} className={p.span}>
                <figure className="group relative w-full h-full overflow-hidden rounded-[1.75rem] ring-1 ring-line shadow-2xl shadow-black/25">
                  <img
                    src={p.src}
                    alt={item.caption}
                    loading="lazy"
                    className="photo-grade w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100c]/90 via-[#14100c]/15 to-transparent" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700" />

                  <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="ornament-star inline-block h-3.5 w-3.5 mb-2 opacity-90" />
                    <p className="font-display text-white text-base md:text-lg font-bold leading-snug max-w-md">
                      {item.caption}
                    </p>
                    <p className="mt-1 text-white/60 text-[10px] md:text-xs tracking-[0.22em] uppercase">
                      {item.meta}
                    </p>
                  </figcaption>

                  <span className="absolute top-4 end-4 glass rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.tag}
                  </span>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
