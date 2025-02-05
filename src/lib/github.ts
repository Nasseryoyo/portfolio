import { Project } from "@prisma/client";

export async function fetchGitHubRepos() {
	const res = await fetch(
		`https://api.github.com/users/${process.env.GITHUB_USER_NAME}/repos`,
		{
			headers: {
				//Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // Use a GitHub PAT for private repos
				Accept: "application/vnd.github.v3+json",
			},
			next: { revalidate: 3600 }, // Cache for 1 hour
		}
	);

	if (!res.ok) throw new Error("Failed to fetch GitHub repos");

	const repos = await res.json();
	return repos.map((repo: any) => ({
		id: repo.id,
		title: repo.name,
		description: repo.description,
		repoLink: repo.html_url,
		liveLink: repo.homepage,
	}));
}
