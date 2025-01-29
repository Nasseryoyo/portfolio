// File: app/page.tsx
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto p-6 text-center">
			{/* Hero Section */}
			<section className="mb-12">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
				<p className="text-gray-600 max-w-xl mx-auto">
					Hi, I'm [Your Name], a passionate full-stack developer specializing in
					Next.js, Prisma, and backend services. This is my personal space to
					track and showcase my projects.
				</p>
				<Link
					href="/projects"
					className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded"
				>
					View My Projects
				</Link>
			</section>

			{/* Featured Projects */}
			<section className="mt-10">
				<h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Dummy project placeholders */}
					<div className="p-4 bg-gray-100 rounded shadow-md">
						<h3 className="text-lg font-semibold">Project 1</h3>
						<p className="text-gray-600">A cool project I built...</p>
						<Link href="/projects" className="text-blue-500 mt-2 inline-block">
							See more
						</Link>
					</div>
					<div className="p-4 bg-gray-100 rounded shadow-md">
						<h3 className="text-lg font-semibold">Project 2</h3>
						<p className="text-gray-600">Another awesome project...</p>
						<Link href="/projects" className="text-blue-500 mt-2 inline-block">
							See more
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
