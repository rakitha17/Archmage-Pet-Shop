import Image from "next/image";
//ANCHOR - project components
import Testimonials from "@/components/Testimonials-Section/Testimonials";
export default function Home() {
  return (
    <section className="py-5">
      <Testimonials />
    </section>
  );
}
