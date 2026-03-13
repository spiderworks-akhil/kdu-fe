import Link from "next/link";

export default function BlogHeroBanner({
  title,
  breadcrumbs,
  backgroundImage,
  meta,
}) {
  return (
    <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
        <nav className="flex justify-center items-center gap-2 text-sm text-white/70 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-accent transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        {meta && (
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-white/80 text-sm">
            {meta.date && <span>{meta.date}</span>}
            {meta.author && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span>{meta.author}</span>
              </>
            )}
            {meta.category && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="bg-accent/20 text-accent px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {meta.category}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
