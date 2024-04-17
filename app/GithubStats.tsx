"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  const { theme } = useTheme();

  return (
    <div>
      <GitHubCalendar
        blockSize={13}
        colorScheme={`${theme === "light" ? "light" : "dark"}`}
        year={2024}
        hideColorLegend={true}
        username="Anish"
      />
    </div>
  );
};

export default GithubStats;
