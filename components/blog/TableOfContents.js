import { useState, useEffect } from "react";
import { FiList, FiX } from "react-icons/fi";

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  const linkList = (
    <ul className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <button
            onClick={() => scrollTo(section.id)}
            className={`block w-full text-left text-sm py-2 px-4 rounded-r border-l-2 transition-colors ${
              activeId === section.id
                ? "border-accent text-accent font-semibold bg-accent/5"
                : "border-transparent text-text-gray hover:text-primary hover:border-primary/30"
            }`}
          >
            {section.heading}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block sticky top-[130px] self-start">
        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 px-4">
          Jump to Section
        </h4>
        {linkList}
      </aside>

      {/* Mobile FAB + panel */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
          aria-label="Open table of contents"
        >
          <FiList size={22} />
        </button>

        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[60vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-primary uppercase tracking-widest">
                  Jump to Section
                </h4>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-text-gray hover:text-primary p-1"
                >
                  <FiX size={20} />
                </button>
              </div>
              {linkList}
            </div>
          </>
        )}
      </div>
    </>
  );
}
