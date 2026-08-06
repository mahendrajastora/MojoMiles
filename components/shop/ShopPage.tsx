"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Select } from "@/components/ui/Select";
import ProductCard from "@/components/shop/ProductCard";
import { PaginationControls } from "@/components/shop/PaginationControls";
import type { Product } from "@/types";
import { productFilters } from "@/constants/site";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const PAGE_SIZE = 8;

function filterProducts(items: Product[], query: string, filter: string) {
  const lowerQuery = query.trim().toLowerCase();

  return items.filter((product) => {
    const matchesFilter =
      filter === "All" ||
      product.tags.includes(filter as any) ||
      product.category.toLowerCase() === filter.toLowerCase() ||
      product.collection.toLowerCase() === filter.toLowerCase();

    if (!matchesFilter) {
      return false;
    }

    if (!lowerQuery) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.collection.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

function sortProducts(items: Product[], sortKey: string) {
  return [...items].sort((a, b) => {
    if (sortKey === "price-asc") {
      return a.price - b.price;
    }
    if (sortKey === "price-desc") {
      return b.price - a.price;
    }
    if (sortKey === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });
}

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortKey, setSortKey] = useState("featured");
  const [page, setPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(PAGE_SIZE);
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, searchQuery, selectedFilter);
    const sorted = sortProducts(filtered, sortKey);
    return sorted;
  }, [searchQuery, selectedFilter, sortKey]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, itemsToShow),
    [filteredProducts, itemsToShow]
  );

  useEffect(() => {
    setPage(1);
    setItemsToShow(PAGE_SIZE);
  }, [searchQuery, selectedFilter, sortKey]);

  useEffect(() => {
    if (!bottomSentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && itemsToShow < filteredProducts.length) {
          setItemsToShow((current) => Math.min(current + PAGE_SIZE, filteredProducts.length));
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(bottomSentinelRef.current);
    return () => observer.disconnect();
  }, [filteredProducts.length, itemsToShow]);

  const handlePageChange = (nextPage: number) => {
    const nextCount = Math.min(nextPage * PAGE_SIZE, filteredProducts.length);
    setPage(nextPage);
    setItemsToShow(nextCount);
  };

  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
        <SectionHeading
          eyebrow="Shop"
          title="Oversized tees built for premium everyday styling."
          description="Search, filter, and sort the collection without refresh. Every product is prepared for a scalable shop experience."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_260px]">
          <div className="space-y-6">
            <SearchInput
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search product name, category, tags..."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">Filter</label>
                <div className="flex flex-wrap gap-3">
                  {productFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedFilter(filter)}
                      className={cn(
                        "rounded-full px-4 py-3 text-xs uppercase tracking-[0.2em] transition",
                        selectedFilter === filter
                          ? "bg-[#1F3A2D] text-[#F9F8F6]"
                          : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                      )}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <Select
                label="Sort"
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value)}
                options={sortOptions}
              />
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-[#121110] p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">Results</p>
            <p className="mt-3 text-3xl font-semibold text-[#F9F8F6]">{filteredProducts.length}</p>
            <p className="mt-2 text-sm leading-6 text-[#CFCBC5]">
              {visibleProducts.length} of {filteredProducts.length} products shown
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/70">
              Page {page}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <div ref={bottomSentinelRef} />

      <div className="space-y-4">
        <PaginationControls page={page} pageCount={Math.ceil(filteredProducts.length / PAGE_SIZE)} onPageChange={handlePageChange} />
        {itemsToShow < filteredProducts.length ? (
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={() => setItemsToShow((current) => Math.min(current + PAGE_SIZE, filteredProducts.length))}
            >
              Load more
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
