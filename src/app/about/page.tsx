import Image from "next/image";
import AboutSection from "@/components/about-section";
import BrandDirectory from "@/components/brand-directory";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const principles = [
  {
    title: "Clarity",
    description:
      "Customers should understand what each brand does and where to go for the right service without confusion.",
  },
  {
    title: "Professionalism",
    description:
      "The website should present Southern Bro Enterprises as a serious multi-service business with a consistent visual standard.",
  },
  {
    title: "Accessibility",
    description:
      "Every important action should be easy to find on desktop and mobile, from learning about the company to requesting service.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_22%),linear-gradient(180deg,_#090312_0%,_#14061f_60%,_#090312_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              About Southern Bro Enterprises
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              A multi-brand company built to serve customers in more than one way
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              Southern Bro Enterprises connects business services, delivery,
              handyman support, landscaping, products, ticketing, and community
              programs under one recognizable company identity.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.9),rgba(10,4,18,0.96))] p-8 text-center">
            <Image
              src="/LOGOS/SouthernBro-Enterprises-Logo.png"
              alt="Southern Bro Enterprises logo"
              width={280}
              height={280}
              className="mx-auto w-[220px] drop-shadow-[0_0_30px_rgba(255,79,216,0.34)]"
            />
            <p className="mt-5 text-sm leading-7 text-[#d9d1e8]">
              Service area currently emphasized across the site: Lynchburg,
              Virginia and the wider Virginia region.
            </p>
          </div>
        </div>
      </section>

      <AboutSection compact />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Our Approach
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            What this website should communicate professionally
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-black uppercase tracking-[0.04em] text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-[#d9d1e8]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Brand Family
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Every active brand presented under one company umbrella
          </h2>
        </div>

        <BrandDirectory maxServices={2} />
      </section>

      <Footer />
    </main>
  );
}
