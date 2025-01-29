// File: app/about/page.tsx
export default function AboutPage() {
	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-4">About Me</h1>
			<div className="flex flex-col md:flex-row items-center gap-6">
				<img
					src="/profile.jpg"
					alt="Profile"
					className="w-40 h-40 rounded-full shadow-md"
				/>
				<p className="text-gray-700 max-w-2xl">
					Hi, I'm [Your Name], a passionate full-stack developer. I specialize
					in Next.js, Prisma, and backend services. This portfolio tracks my
					personal projects and showcases my work. Feel free to explore!
				</p>
			</div>
		</div>
	);
}
