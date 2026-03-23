import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamAvatar from "@/components/team-avatar";
import type { TeamMember } from "@/lib/company-data";

type TeamProfilePageProps = {
  member: TeamMember;
};

export default function TeamProfilePage({ member }: TeamProfilePageProps) {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_60%,_#090312_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.94),rgba(10,4,18,0.98))] p-8 text-center">
            <TeamAvatar
              name={member.name}
              initials={member.initials}
              photoPath={member.photoPath}
              photoPosition={member.photoPosition}
              wrapperClassName="relative mx-auto flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2rem] border border-fuchsia-300/35 bg-fuchsia-500/12 text-white shadow-[0_0_34px_rgba(193,41,255,0.22)]"
              imageClassName="object-cover"
              fallbackClassName="text-4xl font-black uppercase tracking-[0.12em]"
              sizes="176px"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
              {member.title}
            </p>
            <p className="mt-3 text-base leading-7 text-[#ddd2eb]">{member.summary}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Meet Our Team
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              {member.name}
            </h1>
            <p className="mt-5 text-xl font-semibold uppercase tracking-[0.08em] text-[#f7dcff]">
              {member.role}
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              {member.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`mailto:${member.contactEmail}`}
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                Email {member.name.split(" ")[0]}
              </Link>
              <Link
                href="/meet-our-team"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Focus Areas
            </p>
            <div className="mt-6 space-y-4">
              {member.focusAreas.map((focus) => (
                <div
                  key={focus}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[#f5efff]"
                >
                  {focus}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Contact Path
            </p>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              Direct contact:
            </p>
            <Link
              href={`mailto:${member.contactEmail}`}
              className="mt-5 inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
            >
              {member.contactEmail}
            </Link>
            <p className="mt-6 text-sm leading-7 text-[#ddd2eb]">
              These profile pages make it easier to learn each leader&apos;s role and
              reach the right person directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
