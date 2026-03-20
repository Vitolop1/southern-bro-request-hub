import TeamProfilePage from "@/components/team-profile-page";
import { leadershipTeam } from "@/lib/company-data";

const member = leadershipTeam.find((entry) => entry.slug === "william-soteria");

export default function MeetWilliamSoteriaPage() {
  if (!member) {
    throw new Error("William Soteria profile is missing.");
  }

  return <TeamProfilePage member={member} />;
}
