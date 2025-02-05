// File: components/ProjectForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";

export default function ProjectForm({ project }: { project: Project }) {
	const [name, setName] = useState(project?.title || "");
	const [description, setDescription] = useState(project?.description || "");
	const [link, setLink] = useState(project?.repoLink || "");
	const router = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const method = project ? "PUT" : "POST";
		const url = project ? `/api/projects/${project.id}` : "/api/projects";

		const res = await fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, description, link }),
		});

		if (res.ok) {
			router.push("/projects");
		} else {
			alert("Something went wrong!");
		}
	}

	return (
		<form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
			<h2 className="text-2xl font-bold mb-4">
				{project ? "Edit Project" : "New Project"}
			</h2>

			<label className="block mb-2">
				Name
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full border px-3 py-2 rounded"
					required
				/>
			</label>

			<label className="block mb-2">
				Description
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="w-full border px-3 py-2 rounded"
					required
				/>
			</label>

			<label className="block mb-4">
				Repository Link
				<input
					type="url"
					value={link}
					onChange={(e) => setLink(e.target.value)}
					className="w-full border px-3 py-2 rounded"
					required
				/>
			</label>

			<button
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded"
			>
				{project ? "Update" : "Create"}
			</button>
		</form>
	);
}
