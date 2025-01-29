import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";

export default function ProjectDetailPage() {
	const [project, setProject] = useState(null);
	const router = useRouter();

	const params = useParams();

	useEffect(() => {
		async function fetchProject() {
			const res = await fetch(`/api/projects/${params.id}`);
			const data = await res.json();
			setProject(data);
		}
		fetchProject();
	}, [params.id]);

	async function handleDelete() {
		if (confirm("Are you sure you want to delete this project?")) {
			await fetch(`/api/projects/${params.id}`, { method: "DELETE" });
			router.push("/projects");
		}
	}

	if (!project) return <p>Loading...</p>;

	return (
		<div className="container mx-auto p-6">
			<ProjectForm project={project} />
			<button
				onClick={handleDelete}
				className="bg-red-500 text-white px-4 py-2 rounded mt-4"
			>
				Delete Project
			</button>
		</div>
	);
}
