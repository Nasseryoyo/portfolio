import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { fetchGitHubRepos } from "@/lib/github";

export async function GET() {
	const projects = await prisma.project.findMany();
	const githubRepos = await fetchGitHubRepos();

	// Combine all projects
	const allProjects = [...projects, ...githubRepos];

	return NextResponse.json(allProjects);
}
