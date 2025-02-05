// File: app/projects/page.tsx
"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Project } from "@prisma/client";

export default function ProjectsPage() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function fetchProjects() {
			const res = await fetch("/api/projects/list");
			const data = await res.json();
			setProjects(data);
		}
		fetchProjects();
	}, []);

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">My Projects</h1>
			<Link
				href="/projects/new"
				className="bg-blue-500 text-white px-4 py-2 rounded"
			>
				+ Add Project
			</Link>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
				{projects.map((project: Project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
