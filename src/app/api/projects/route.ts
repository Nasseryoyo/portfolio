import { NextResponse } from "next/server";
import { Project } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		const projects = await prisma.project.findMany({
			take: 6,
			orderBy: { createdAt: "desc" },
		});
		return NextResponse.json(projects);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch projects" },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	const { title, description, repoLink, liveLink } = await req.json();
	const project = await prisma.project.create({
		data: {
			title,
			description,
			repoLink,
			liveLink,
		},
	});
	return NextResponse.json(project);
}
