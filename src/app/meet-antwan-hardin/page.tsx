import TeamProfilePage from "@/components/team-profile-page";
import { leadershipTeam } from "@/lib/company-data";

const member = leadershipTeam.find((entry) => entry.slug === "antwan-hardin");

export default function MeetAntwanHardinPage() {
  if (!member) {
    throw new Error("Antwan Hardin profile is missing.");
  }

  return <TeamProfilePage member={member} />;
}
