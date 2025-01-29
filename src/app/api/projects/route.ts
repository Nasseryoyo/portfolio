import { NextResponse } from "next/server";
import { Project } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const projects = await prisma.project.findMany();
	return NextResponse.json(projects);
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
