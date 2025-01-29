import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Update a project by ID
export async function PUT(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = await params; // Extract id from params
	const { title, description, repoLink, liveLink } = await req.json();

	try {
		const project = await prisma.project.update({
			where: { id },
			data: {
				title,
				description,
				repoLink,
				liveLink,
			},
		});

		return NextResponse.json(project);
	} catch (error) {
		return NextResponse.json(
			{ error: "Project not found or update failed." },
			{ status: 400 }
		);
	}
}

// Delete a project by ID
export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = await params; // Extract id from params

	try {
		const project = await prisma.project.delete({
			where: { id },
		});

		return NextResponse.json(project);
	} catch (error) {
		return NextResponse.json(
			{ error: "Project not found or delete failed." },
			{ status: 400 }
		);
	}
}

// Get a project by ID
export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = await params; // Extract id from params

	try {
		const project = await prisma.project.findUnique({
			where: { id },
		});

		if (!project) {
			return NextResponse.json(
				{ error: "Project not found." },
				{ status: 404 }
			);
		}

		return NextResponse.json(project);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch the project." },
			{ status: 500 }
		);
	}
}
