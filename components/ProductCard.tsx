import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group card-base flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-eyebrow text-gold-500 md:text-[11px]">
          {product.category}
        </div>
        <h3 className="relative mt-1.5 inline-block pb-1 font-display text-[17px] font-medium text-blue-900 md:text-[22px]">
          {product.name}
          <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gold-500 transition-all duration-300 ease-premium group-hover:w-full" />
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-600 md:text-[14px]">
          {product.description}
        </p>
        <div className="mt-auto pt-3 text-[11px] uppercase tracking-[0.08em] text-ink-400 md:pt-4 md:text-[12px]">
          Available in · {product.meta}
        </div>
      </div>
    </article>
  );
}
