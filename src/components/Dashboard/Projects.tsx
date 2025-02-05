"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
	id: string;
	title: string;
	description: string;
	image?: string;
	slug: string;
}

export default function FeaturedProjects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch("/api/projects");
				if (!res.ok) throw new Error("Failed to fetch projects");
				const data = await res.json();
				setProjects(data);
			} catch (err) {
				setError("Error loading projects");
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	return (
		<section className="mt-10">
			<h2 className="text-2xl font-bold mb-4 text-center">Recent Projects</h2>

			{error && <p className="text-red-500 text-center">{error}</p>}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{loading
					? Array(6)
							.fill(0)
							.map((_, index) => (
								<Skeleton key={index} className="h-40 w-full rounded-lg" />
							))
					: projects.map((project) => (
							<Card
								key={project.id}
								className="hover:shadow-lg transition-shadow"
							>
								<CardHeader>
									<CardTitle>{project.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{project.description}</p>
									<Button asChild className="mt-4 w-full">
										<Link href={`/projects/${project.id}`}>See more</Link>
									</Button>
								</CardContent>
							</Card>
					  ))}
			</div>
		</section>
	);
}
