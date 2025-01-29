// File: app/projects/new/page.tsx
import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
	return (
		<div className="container mx-auto p-6">
			<ProjectForm project={undefined} />
		</div>
	);
}
