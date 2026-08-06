import { products } from "@/lib/data";
import ProductDetail from "@/components/product/ProductDetail";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return <div className="min-h-[70vh] p-10 text-white">Product not found.</div>;
  }

  return <ProductDetail product={product} />;
}
