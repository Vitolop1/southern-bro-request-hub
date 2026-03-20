import TeamProfilePage from "@/components/team-profile-page";
import { leadershipTeam } from "@/lib/company-data";

const member = leadershipTeam.find((entry) => entry.slug === "ciera-tropp");

export default function MeetCieraTroppPage() {
  if (!member) {
    throw new Error("Ciera Tropp profile is missing.");
  }

  return <TeamProfilePage member={member} />;
}
