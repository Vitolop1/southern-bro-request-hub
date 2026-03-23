"use client";

import Link from "next/link";
import TeamAvatar from "@/components/team-avatar";
import { useLanguage } from "@/components/language-provider";
import { leadershipTeam } from "@/lib/company-data";

type TeamGridProps = {
  compact?: boolean;
};

export default function TeamGrid({ compact = false }: TeamGridProps) {
  const { messages } = useLanguage();
  const visibleMembers = compact ? leadershipTeam.slice(0, 3) : leadershipTeam;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {visibleMembers.map((member, index) => (
        <article
          key={member.slug}
          className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-6 shadow-[0_0_40px_rgba(193,41,255,0.08)]"
        >
          <div className="flex items-center gap-4">
            <TeamAvatar
              name={member.name}
              initials={member.initials}
              photoPath={member.photoPath}
              wrapperClassName="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-fuchsia-300/30 bg-fuchsia-500/12 text-white shadow-[0_0_24px_rgba(255,79,216,0.16)]"
              imageClassName="object-cover"
              fallbackClassName="text-lg font-black uppercase tracking-[0.12em]"
              sizes="80px"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb8f0]">
                {messages.teamGrid.titles[index] ?? member.title}
              </p>
              <h3 className="mt-1 text-xl font-black uppercase tracking-[0.04em] text-white">
                {member.name}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#f7dcff]">
            {messages.teamGrid.roles[index] ?? member.role}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#ddd2eb]">
            {messages.teamGrid.summaries[index] ?? member.summary}
          </p>

          <Link
            href={`/meet-${member.slug}`}
            className="mt-5 inline-flex rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
          >
            {messages.teamGrid.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
