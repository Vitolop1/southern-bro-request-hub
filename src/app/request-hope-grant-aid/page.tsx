import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";
import { hopeGrantProgram } from "@/lib/company-data";

export default function RequestHopeGrantAidPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
            Request H.O.P.E. Grant Aid
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Help Operations Powering Equality
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#efe5d0]">
            {hopeGrantProgram.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-[#d4a84f]/25 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.16),_transparent_32%),linear-gradient(180deg,rgba(13,8,22,0.98),rgba(8,3,15,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
              Program Highlights
            </p>
            <div className="mt-6 space-y-4">
              {hopeGrantProgram.supportTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-[#f5efff]"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#ddd2eb]">
              {hopeGrantProgram.legalNote}
            </p>
            <div className="mt-8">
              <Link
                href="/donate-for-hope"
                className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Donate for H.O.P.E.
              </Link>
            </div>
          </div>

          <ServiceForm
            defaultCategory="VA Recovery Services / Community Support"
            lockCategory
            sectionLabel="Community Support Request"
            title="Request H.O.P.E. Grant Aid"
            description="Share your educational or community support needs so the Southern Bro team can review alignment, urgency, and the best next step."
            submitLabel="Submit Support Request"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
