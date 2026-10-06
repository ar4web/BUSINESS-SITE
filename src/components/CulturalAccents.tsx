export default function CulturalAccents() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 pattern-girih opacity-[0.05] dark:opacity-[0.06]" />

      <div className="sadu-rail absolute inset-y-0 start-0 hidden w-8 border-e border-line/40 lg:block" />
      <div className="sadu-rail absolute inset-y-0 end-0 hidden w-8 border-s border-line/40 lg:block" />

      <div
        className="absolute inset-y-0 start-0 hidden w-8 lg:block"
        style={{ background: 'linear-gradient(to bottom, var(--bg), transparent 14%, transparent 86%, var(--bg))' }}
      />
      <div
        className="absolute inset-y-0 end-0 hidden w-8 lg:block"
        style={{ background: 'linear-gradient(to bottom, var(--bg), transparent 14%, transparent 86%, var(--bg))' }}
      />

      <div
        className="absolute start-8 top-0 h-full w-4 opacity-60 lg:start-8"
        style={{ background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--gold) 30%, transparent), transparent)' }}
      />
      <div
        className="absolute end-8 top-0 h-full w-4 opacity-60"
        style={{ background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--gold) 30%, transparent), transparent)' }}
      />
    </div>
  );
}
