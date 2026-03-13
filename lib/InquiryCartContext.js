import { createContext, useContext, useState, useEffect } from "react";

const InquiryCartContext = createContext();

export function InquiryCartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("inquiryCart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("inquiryCart", JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          manufacturer: product.manufacturer,
          subcategory: product.subcategory,
          categorySlug: product.categorySlug,
          categoryTitle: product.categoryTitle,
          categoryImage: product.categoryImage,
          image: product.images?.[0] || product.categoryImage,
          quantity,
        },
      ];
    });
  };

  const updateQuantity = (slug, quantity) => {
    if (quantity < 1) return removeItem(slug);
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, quantity } : i))
    );
  };

  const removeItem = (slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <InquiryCartContext.Provider
      value={{ items, addItem, updateQuantity, removeItem, clearCart, totalItems }}
    >
      {children}
    </InquiryCartContext.Provider>
  );
}

export function useInquiryCart() {
  const ctx = useContext(InquiryCartContext);
  if (!ctx) throw new Error("useInquiryCart must be used within InquiryCartProvider");
  return ctx;
}
