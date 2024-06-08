import FeaturedProducts from "@/components/Featured-Products/FeaturedProducts";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-5">
      <FeaturedProducts />
    </section>
  );
}
