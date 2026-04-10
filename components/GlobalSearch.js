import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { FiSearch, FiX, FiArrowRight } from "react-icons/fi";
import { productCategories } from "@/lib/productData";
import { solutions } from "@/lib/solutionData";
import { markets } from "@/lib/marketData";
import { blogPosts } from "@/lib/blogData";
import { newsPosts } from "@/lib/newsData";
import { events } from "@/lib/eventData";
import { jobOpenings } from "@/lib/careerData";

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildSearchIndex() {
  const items = [];

  // Static pages
  items.push(
    { title: "About Us", description: "Learn about KDU Group", href: "/about", category: "Pages" },
    { title: "Contact Us", description: "Get in touch with KDU", href: "/contact", category: "Pages" },
    { title: "Partners", description: "Our global partners", href: "/partners", category: "Pages" },
    { title: "Careers", description: "Career opportunities at KDU", href: "/careers", category: "Pages" },
  );

  // Products - categories
  productCategories.forEach((cat) => {
    items.push({
      title: cat.title,
      description: cat.desc,
      href: `/products/${cat.slug}`,
      category: "Products",
    });
    // Individual products
    cat.subcategories.forEach((sub) => {
      sub.items.forEach((item) => {
        items.push({
          title: item.product,
          description: `${sub.name} — ${cat.title} | ${item.manufacturer}`,
          href: `/products/${cat.slug}/${toSlug(item.product)}`,
          category: "Products",
        });
      });
    });
  });

  // Solutions
  solutions.forEach((sol) => {
    items.push({
      title: sol.title,
      description: sol.shortDesc || sol.tagline || "",
      href: `/solutions/${sol.slug}`,
      category: "Solutions",
    });
  });

  // Markets
  markets.forEach((m) => {
    items.push({
      title: m.title,
      description: m.shortDesc || m.tagline || "",
      href: `/markets/${m.slug}`,
      category: "Markets",
    });
  });

  // Blogs
  blogPosts.forEach((post) => {
    items.push({
      title: post.title,
      description: post.excerpt || "",
      href: `/media/blogs/${post.slug}`,
      category: "Blogs",
    });
  });

  // News
  newsPosts.forEach((post) => {
    items.push({
      title: post.title,
      description: post.excerpt || "",
      href: `/media/news/${post.slug}`,
      category: "News",
    });
  });

  // Events
  events.forEach((ev) => {
    items.push({
      title: ev.title,
      description: ev.excerpt || ev.location || "",
      href: `/media/events/${ev.slug}`,
      category: "Events",
    });
  });

  // Careers
  jobOpenings.forEach((job) => {
    items.push({
      title: job.title,
      description: `${job.location} — ${job.type}`,
      href: "/careers",
      category: "Careers",
    });
  });

  return items;
}

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/);
    return searchIndex
      .filter((item) => {
        const text = `${item.title} ${item.description} ${item.category}`.toLowerCase();
        return words.every((w) => text.includes(w));
      })
      .slice(0, 12);
  }, [query, searchIndex]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      // Ctrl/Cmd + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close on route change
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  const handleSelect = (href) => {
    setOpen(false);
    router.push(href);
  };

  // Group results by category
  const grouped = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="text-white hover:text-accent transition-colors p-1"
        aria-label="Search"
        title="Search (Ctrl+K)"
      >
        <FiSearch size={14} />
      </button>

      {/* Search overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
              <FiSearch size={20} className="text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, solutions, pages..."
                className="flex-1 text-base text-gray-800 placeholder-gray-400 outline-none bg-transparent"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FiX size={18} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <div className="px-5 py-10 text-center text-gray-400 text-sm">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}

              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="px-5 pt-4 pb-1">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {category}
                    </span>
                  </div>
                  {items.map((item, i) => (
                    <button
                      key={`${category}-${i}`}
                      onClick={() => handleSelect(item.href)}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary truncate">
                          {item.title}
                        </p>
                        {item.description && (
                          <p className="text-xs text-gray-400 truncate mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <FiArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-accent shrink-0 transition-colors"
                      />
                    </button>
                  ))}
                </div>
              ))}

              {!query.trim() && (
                <div className="px-5 py-8 text-center text-gray-400 text-sm">
                  Start typing to search across products, solutions, news &amp; more
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
