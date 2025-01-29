// File: components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-gray-900 text-white p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					My Portfolio
				</Link>
				<div className="space-x-6">
					<Link href="/projects" className="hover:text-gray-400">
						Projects
					</Link>
					<Link href="/about" className="hover:text-gray-400">
						About
					</Link>
					<Link href="/contact" className="hover:text-gray-400">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
