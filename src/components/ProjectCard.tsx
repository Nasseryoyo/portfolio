// File: components/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@prisma/client";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="border rounded-lg p-4 shadow-lg bg-white">
			<h2 className="text-xl font-bold">{project.title}</h2>
			<p className="text-gray-600">{project.description}</p>
			<div className="flex justify-between mt-3">
				<a href={project.repoLink} target="_blank" className="text-blue-500">
					View Repo
				</a>
				<Link href={`/projects/${project.id}`} className="text-gray-800">
					Details →
				</Link>
			</div>
		</div>
	);
}
