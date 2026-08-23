"use client";

/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { ProductCard } from "@/components/cards/ProductCard";
import type { Product } from "@/data/products";

export interface ProductCatalogProps {
  products: readonly Product[];
}

const ALL_CATEGORIES = "Todas";
// Con el catálogo demostrativo de 6 fichas esto da 2 páginas reales.
// Al cargar el catálogo definitivo, subir a 9 o 12.
const PAGE_SIZE = 3;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-PE")
    .trim();
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [lastFilterKey, setLastFilterKey] = useState(`${ALL_CATEGORIES}::`);
  const resultsRef = useRef<HTMLDivElement>(null);
  const pagedByUser = useRef(false);

  const categories = useMemo(
    () => [
      ALL_CATEGORIES,
      ...Array.from(new Set(products.map((product) => product.category))).sort((a, b) =>
        a.localeCompare(b, "es-PE"),
      ),
    ],
    [products],
  );

  const visibleProducts = useMemo(() => {
    const normalizedQuery = normalize(query);

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORIES || product.category === activeCategory;
      const searchableText = normalize(
        [
          product.name,
          product.brand,
          product.category,
          product.description,
          ...product.features,
        ].join(" "),
      );

      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, products, query]);

  const pageCount = Math.max(1, Math.ceil(visibleProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageProducts = visibleProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // Al cambiar filtros se vuelve a la primera página: la nº 4 de otro filtro no existe.
  // Ajuste durante el render, no en un efecto: así no hay un pintado intermedio
  // con la página anterior sobre un resultado que ya cambió.
  const filterKey = `${activeCategory}::${query}`;

  if (lastFilterKey !== filterKey) {
    setLastFilterKey(filterKey);
    setPage(1);
  }

  // Solo se desplaza la vista cuando el cambio de página lo pidió la persona.
  useEffect(() => {
    if (!pagedByUser.current) {
      return;
    }

    pagedByUser.current = false;
    resultsRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [currentPage]);

  function goToPage(next: number) {
    pagedByUser.current = true;
    setPage(Math.min(Math.max(next, 1), pageCount));
  }

  function clearFilters() {
    setActiveCategory(ALL_CATEGORIES);
    setQuery("");
    setPage(1);
  }

  return (
    <div>
      <div className="grid min-w-0 gap-5 border-y border-[var(--color-rule)] py-6 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:items-end">
        <div>
          <label
            className="mb-2 block text-sm font-semibold text-[var(--color-ink)]"
            htmlFor="product-search"
          >
            Buscar en el catálogo
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              size={19}
            />
            <input
              className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-brand-white)] pl-11 pr-11 text-[var(--color-ink)] outline outline-2 outline-offset-1 outline-transparent transition-[border-color] duration-150 placeholder:text-[var(--color-muted)] focus-visible:border-[var(--color-focus)] focus-visible:outline-[var(--color-focus)]"
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Producto, marca o característica"
              autoComplete="off"
              aria-controls="product-results"
            />
            {query ? (
              <button
                className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-[var(--radius-sm)] text-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
              >
                <X aria-hidden="true" size={17} />
              </button>
            ) : null}
          </div>
        </div>

        <fieldset className="min-w-0">
          <legend className="mb-2 text-sm font-semibold text-[var(--color-ink)]">
            Filtrar por categoría
          </legend>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  className={`min-h-10 whitespace-nowrap rounded-[var(--radius-pill)] border px-4 text-sm font-semibold transition-[background-color,color,border-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] active:translate-y-px ${
                    isActive
                      ? "border-[var(--color-brand-purple)] bg-[var(--color-brand-purple)] text-[var(--color-brand-white)]"
                      : "border-[var(--color-rule)] bg-[var(--color-brand-white)] text-[var(--color-ink)] hover:border-[var(--color-brand-purple)]"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="product-results"
                  onClick={() => setActiveCategory(category)}
                  key={category}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div id="product-results" ref={resultsRef}>
        <p className="mt-6 text-sm text-[var(--color-ink-2)]" aria-live="polite" aria-atomic="true">
          {visibleProducts.length === 1
            ? "1 producto encontrado"
            : `${visibleProducts.length} productos encontrados`}
          {visibleProducts.length > PAGE_SIZE
            ? ` · página ${currentPage} de ${pageCount}`
            : ""}
        </p>

        {visibleProducts.length ? (
          <>
            <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pageProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>

            {pageCount > 1 ? (
              <nav className="st-pager" aria-label="Paginación del catálogo">
                <button
                  className="st-pager__button"
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft aria-hidden="true" size={17} />
                  Anterior
                </button>

                {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                  <button
                    className="st-pager__button"
                    key={number}
                    type="button"
                    aria-current={number === currentPage ? "true" : undefined}
                    aria-label={`Ir a la página ${number}`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </button>
                ))}

                <button
                  className="st-pager__button"
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === pageCount}
                >
                  Siguiente
                  <ChevronRight aria-hidden="true" size={17} />
                </button>
              </nav>
            ) : null}
          </>
        ) : (
          <div className="mt-6 border border-[var(--color-rule)] bg-[var(--color-brand-white)] px-6 py-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
              No encontramos coincidencias
            </h2>
            <p className="mx-auto mt-3 max-w-[55ch] text-sm leading-6 text-[var(--color-ink-2)]">
              Prueba con otra palabra o vuelve a ver todas las categorías. También puedes
              consultarnos directamente por WhatsApp.
            </p>
            <button
              className="mt-6 min-h-11 rounded-[var(--radius-sm)] border border-[var(--color-brand-purple)] px-5 font-semibold text-[var(--color-brand-purple)] hover:bg-[var(--color-brand-purple-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
              type="button"
              onClick={clearFilters}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
